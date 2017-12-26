<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Support\Facades\DB;

use App\Models\Invoice;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\InvoiceResource;
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
    public function show(Invoice $invoice)
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
    public function edit(Invoice $invoice)
    {
        //
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
        //
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
