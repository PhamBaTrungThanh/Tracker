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
        //
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
