<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

use App\Models\Receive;
use App\Models\Tracker;

use App\Http\Resources\ReceiveResource;
use App\Http\Resources\TrackerResource;
use App\Http\Resources\MaterialResource;
class ReceiveController extends Controller
{
    public function fromInvoice( int $invoice_id, Request $request)
    {
        $receives = Receive::where('invoice_id', $invoice_id)->with('trackers')->get();
        
        $trackers = $receives->pluck('trackers');
        if (count($trackers)) {
            $pivot = $trackers[0]->pluck('pivot');
            return ReceiveResource::collection($receives)->additional([
                'pivot' => $pivot,
            ]);
        } else {
            return ReceiveResource::collection($receives);
        }
    }
    public function store(Request $request)
    {
        $receive = new Receive;
        $receive->name = $request->input('name');
        $receive->received_at = Carbon::createFromFormat("d/m/Y", $request->input('received_at'));
        $receive->invoice_id = $request->input('invoice_id');
        $receive->save();
        $trackers = [];
        $materials = [];
        foreach ($request->receive_list as $item) {
            if ($item['value'] > 0) {
                $tracker = Tracker::find($item['tracker_id']);
                if ($tracker) {
                    $value = (($tracker->unit - $tracker->received_unit - $item['value']) < 0) ? $tracker->unit - $tracker->received_unit : $item['value'];
                    $tracker->received_unit += $value;
                    $tracker->save();
                    $receive->trackers()->save($tracker, ['unit' => $value]);
                    $tracker->material()->increment('received_unit', $value);
                    $trackers[] = new TrackerResource($tracker);
                    $materials[] = new MaterialResource($tracker->material);
                }
            }
        }
        return (new ReceiveResource($receive))->additional([
            'affected' => [
                'trackers' => $trackers,
                'materials' => $materials,
            ],
        ]);
    }
}
