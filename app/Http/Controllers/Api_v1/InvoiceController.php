<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Support\Facades\DB;

use App\Models\Invoice;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use	Carbon\Carbon;

use App\Http\Resources\InvoiceResource;
use App\Http\Resources\PaymentResource;
use App\Http\Resources\ReceiveResource;
use App\Http\Resources\ProviderResource;
use App\Http\Resources\TrackerResource;
use App\Http\Resources\BoqResource;
use App\Http\Resources\MaterialResource;

use App\Models\Receive;
use App\Models\Tracker;
use App\Models\Work;
use App\Models\Provider;
use App\Models\Payment;
use App\Models\Material;
use App\Models\Boq;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        

    }
    public function fromWork(int $work_id, Request $request)
    {
        $invoices = Invoice::withCount(['trackers', 'payments', 'receives'])
            ->where('type', 'invoice')
            ->where('work_id', $work_id)
            ->when($request->filled('disclude'), function($query) use ($request) {
                $not_in_array = explode(",", $request->query('disclude'));
                return $query->whereNotIn('id', $not_in_array);
            })->get();
        return InvoiceResource::collection($invoices);
    }
    public function related(int $invoice_id, Request $request)
    {
        $payments = false;
        if ($request->has('without_payments')) {
            $not_in_array = explode(",", $request->query('not_in'));
            $payments = Payment::where('invoice_id', $invoice_id)->whereNotIn('id', $not_in_array)->get();
        }

        return response()->json([
            'related' => [
                'payments' => ($payments) ? PaymentResource::collection($payments) : false,
            ],
        ]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->input('provider_id') !== 0) {
            $provider_id = $request->input('provider_id');
            $new_provider = false;

        } else if ($request->filled('new_provider')) {
            $new_provider = true;
            $provider = new Provider();
            $provider->name = $request->input('new_provider.name');
            $provider->description = $request->input('new_provider.description');
            $provider->address = $request->input('new_provider.address');
            $provider->tax_number = $request->input('new_provider.tax_number');
            $provider->slug = str_slug($provider->name);
            $provider->save();
            $provider_id = $provider->id;
        } else {
            return response()->json(['error' => 'no provider'], 400);
        }


        $total = 0;
        $invoice = new Invoice();
        $invoice->name = $request->input('new_invoice.name');
        $invoice->work_id = intval($request->input('work_id'));
        $invoice->signed_at = Carbon::createFromFormat('d/m/Y', $request->input('new_invoice.signed_at'));
        $invoice->slug = str_slug($invoice->name);
        $invoice->type = $request->input('new_invoice.type');
        $invoice->uid = $request->input('new_invoice.uid');
        $invoice->provider_id = $provider_id;
        $invoice->payment_total = 0;
        $invoice->total = 0;
        $invoice->buyer_id = $request->user()->id;
        $invoice->save();

        $trackers = [];
        $materials = [];
        $boqs = [];
        $uid_to_id = [];
        $sum = 0;
        foreach ($request->input('list') as $node) {
            $tracker = ($node['tracker']['unit'] === 0 && $node['tracker']['price'] === 0) ? false : $node['tracker'];
            

            if ($node['is_new']) {
                $material = new Material;
                $material->name = $node['name'];
                $material->brand = $node['brand'];
                $material->work_id =  $request->input('work_id');
                $material->currency = ($node['currency']) ? $node['currency'] : "";
                $material->total_unit = ($tracker) ? $tracker['unit'] : 0;
                $material->total_price = ($tracker) ? ( floatval($tracker['unit']) * floatval($tracker['price']) * (floatval($tracker['vat'])/100 + 1) ) : 0;
                $material->invoice_count = 1;
                $material->received_unit = 0;

                if ($node['parent_id']) {
                    $material->parent_id = $node['parent_id'];
                } else if ($node['parent_uid']) {
                    $material->parent_id = $uid_to_id[$node['parent_uid']];
                }
                $material->save();
                $materials[] = new MaterialResource($material);
                if (isset($node['has_children'])) {
                    $uid_to_id[$node['uid']] = $material->id;
                }
                $material_id = $material->id;
            } else {
                Material::whereId($node['id'])->increment('invoice_count');
                $material_id = $node['id'];
            }

            if ($tracker) {
                $tracker_eloquent = new Tracker;
                $tracker_eloquent->material_id = $material_id;
                $tracker_eloquent->invoice_id = $invoice->id;
                $tracker_eloquent->bought_at = $invoice->signed_at;
                $tracker_eloquent->unit = $tracker['unit'];
                $tracker_eloquent->received_unit = 0;
                $tracker_eloquent->cost = $tracker['price'];
                $tracker_eloquent->vat = $tracker['vat'];
                $tracker_eloquent->buyer_id = $request->user()->id;
                $tracker_eloquent->vat_sum = ( floatval($tracker['unit']) * floatval($tracker['price']) * (floatval($tracker['vat'])/100) );
                $tracker_eloquent->total = ( floatval($tracker['unit']) * floatval($tracker['price']) * (floatval($tracker['vat'])/100 + 1) );
                $tracker_eloquent->save();
                $trackers[] = new TrackerResource($tracker_eloquent);
                $sum += $tracker_eloquent->total;
            }
            if (count($node['boqs']) > 0) {
                foreach ($node['boqs'] as $boq) {
                    if ($boq['is_new']) {
                        if ($boq['price'] !== 0 && $boq['unit'] !== 0) {
                            $boq_eloquent = new Boq;
                            $boq_eloquent->material_id = $material_id;
                            $boq_eloquent->name = "BOQ";
                            $boq_eloquent->unit = $boq['unit'];
                            $boq_eloquent->price = $boq['price'];
                            $boq_eloquent->vat = $boq['vat'];
                            $boq_eloquent->vat_sum = ( floatval($boq['unit']) * floatval($boq['price']) * (floatval($boq['vat'])/100) );
                            $boq_eloquent->total = ( floatval($boq['unit']) * floatval($boq['price']) * (floatval($boq['vat'])/100 + 1) );
                            $boq_eloquent->description = "";
                            $boq_eloquent->save();

                            $boqs[] = new BoqResource($boq_eloquent);
                        }    
                    }
                }
            }
        }
      
        $invoice->total = $sum;
        $invoice->save();
        return (new InvoiceResource($invoice))->additional([
            'provider' => ($new_provider) ? (new ProviderResource($provider)) : false,
            'trackers' => (count($trackers) > 0) ? $trackers : false,
            'materials' => (count($materials) > 0) ? $materials : false,
            'boqs' => (count($boqs) > 0) ? $boqs : false,
        ]);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function show(Invoice $invoice, Request $request)
    {
        
        /*
        $invoice->load(['work', 'provider', 'trackers', 'trackers.material','trackers.material.boq', 'payments', 'receives', 'trackers.receives']);
        $received = $invoice->receives->map( function($receive) {

            $trackers = $receive->trackers->map( function($tracker) {
                return [
                    "tracker_id" => $tracker->pivot->tracker_id,
                    "unit" => $tracker->pivot->unit                   
                ];
            });
            return [
                'receive_id' => $receive->id,
                'trackers' => $trackers,
            ];
        });
        foreach($invoice->trackers as $index => $tracker) {
            $tracker->invoice = [
                'signed_at' => $invoice->signed_at,
                'provider' => ['name' => $invoice->provider->name],
            ];
        }

        return (new InvoiceResource($invoice))->additional(['meta' => [
            'received_list' => $received,
            'payments' => PaymentResource::collection($invoice->payments),
            'receives' => ReceiveResource::collection($invoice->receives),
            'provider' => new ProviderResource($invoice->provider),
            'trackers' => TrackerResource::collection($invoice->trackers),
        ]]);
        */
        return new InvoiceResource($invoice);  
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function edit(Invoice $invoice, Request $request)
    {
        if ($request->query('action') === 'new_receive') {
            $invoice->load(['trackers', 'trackers.material']);

            return response()->json($invoice);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Invoice $invoice)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invoice $invoice)
    {
        $invoice->loadMissing(['trackers', 'trackers.material']);
        foreach($invoice->trackers as $tracker) {
            $material = $tracker->material;
            $material->invoice_count -=1;
            $material->total_unit -= $tracker->unit;
            $material->total_price -= $tracker->total;
            $material->save();
            $tracker->receives()->detach();
            $tracker->delete();
        }
        $invoice->payments()->delete();
        $invoice->receives()->delete();
        $invoice->delete();
    }
}
