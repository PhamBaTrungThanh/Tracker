<?php

namespace App\Http\Controllers\Api_v1;

use App\Models\Tracker;

use App\Http\Resources\TrackerResource;
use App\Http\Resources\MaterialResource;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TrackerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

    }
    public function fromInvoice( int $invoice_id, Request $request ) 
    {
        $trackers = Tracker::when($request->filled('disclude'), function($query) use ($request) {
            $not_in_array = explode(",", $request->query('disclude'));
            return $query->whereNotIn('id', $not_in_array);
        })->where('invoice_id', $invoice_id)
        ->with(['material', 'material.boq'])
        ->get();

        return TrackerResource::collection($trackers)->additional([
            'materials' => MaterialResource::collection($trackers->pluck('material')),
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tracker  $tracker
     * @return \Illuminate\Http\Response
     */
    public function show(Tracker $tracker)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tracker  $tracker
     * @return \Illuminate\Http\Response
     */
    public function edit(Tracker $tracker)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tracker  $tracker
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tracker $tracker)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tracker  $tracker
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tracker $tracker)
    {
        //
    }
}
