<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Support\Facades\DB;

use App\Models\Invoice;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\InvoiceResource;

use App\Models\Payment;
use App\Models\Receive;
use App\Models\Tracker;
use App\Models\Work;
use App\Models\Provider;
class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $invoices = Invoice::where([
            ['work_id', '=', $request->query('work_id')],
            ['provider_id', '=', $request->query('provider_id')]
        ])->orderBy('signed_at')->withCount('receives')->with('payments')->get();
        return InvoiceResource::collection($invoices);
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
        if ($request->provider_id === 0) {
            if (!$request->input('new_provider.name')) {
                return response()->json(['error' => 'No provider name'], 400);
            } else {
                $provider = new Provider();
                $provider->name = $request->input('new_provider.name');
                $provider->description = $request->input('new_provider.description');
                $provider->address = $request->input('new_provider.address');
                $provider->tax_number = $request->input('new_provider.tax_number');
                $provider->slug = str_slug($provider->name);
                $provider->save();
                $provider_id = $provider->id;
            }
        } else {
            $provider_id = $request->provider_id;
        }
        $work = Work::find($request->work_id);
        $total = 0;
        $invoice = new Invoice();
        $invoice->name = $request->name;
        $invoice->work_id = $request->work_id;
        $invoice->signed_at = $request->signed_at;
        $invoice->slug = str_slug($invoice->name);
        $invoice->type = $request->type;
        $invoice->uid = $request->contract_number;
        $invoice->provider_id = $provider_id;
        $invoice->payment_total = 0;
        $invoice->save();

        foreach ($request->list as $node) {
            if ($node["id"] === 0) {
                $category = $work->categories()->create(['name' => $node['name']]);               
            } else {
                $category = $work->categories()->find($node["id"]);
            }
            
            foreach ($node['children'] as $material) {
                $total += ($material['unit'] * $material['price']);
                if ($material['is_new']) {
                    $material_eloquent = $category->materials()->create([
                        'name' => $material['name'],
                        'per' => ($material['per']) ? $material['per'] : "m",
                        'currency' => $material['currency'],
                        'brand' => $material['brand'],
                    ]);
                    $material_eloquent->boq()->create([
                        'price' => $material['boq_price'],
                        'unit' => $material['boq_unit'],
                        'description' => "",
                        'name' => "BOQ",
                        'brand' => $material['brand'],
                        'total' => (int) $material['boq_unit'] * (float) $material['boq_price'],
                    ]);
                } else {
                    $material_eloquent = $category->materials()->find($material['id']);
                }

                
                $tracker = new Tracker();
                $tracker->invoice_id = $invoice->id;
                $tracker->material_id = $material_eloquent->id;
                $tracker->unit = $material['unit'];
                $tracker->cost = $material['price'];
                $tracker->total = $material['unit'] * $material['price'];
                $tracker->save();

                if ($request->type === "invoice") {
                    $material_eloquent->invoice_count += 1;
                    $material_eloquent->total_unit += $material['unit'];
                    $material_eloquent->total_price += $tracker->total;
                    $material_eloquent->save();
                }
            }
        }
        $invoice->total = $total;
        $invoice->save();
        return response()->json(['message' => 'success']);
    
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function show(Invoice $invoice, Request $request)
    {

        $invoice->load(['work', 'provider', 'trackers', 'trackers.material', 'payments', 'receives', 'trackers.receives']);
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
        ]]);
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
        if ($request->type === "new_payment") {
            $payment = new Payment;
            $payment->name = $request->input('name');
            $payment->pay_at = $request->input('pay_at');
            $payment->note = $request->input('note');
            $payment->amount = $request->input('amount');
            $payment->method = $request->input('method');
            $invoice->payments()->save($payment);
            $invoice->payment_total += $payment->amount;
            $invoice->save();
        }
        
        if ($request->type === "new_receive") {
            $receive = new Receive;
            $receive->name = $request->input('name');
            $receive->received_at = $request->receive_at;
            $invoice->receives()->save($receive);
            foreach ($request->receive_list as $item) {
                if ($item['value'] > 0) {
                    $tracker = Tracker::find($item['id']);
                    if ($tracker) {
                        $tracker->received_unit += $item['value'];
                        $tracker->save();
                        $receive->trackers()->save($tracker, ['unit' => $item['value']]);
                        $tracker->material->received_unit += $item['value'];
                    }
                }

            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invoice $invoice)
    {
        //
    }
}
