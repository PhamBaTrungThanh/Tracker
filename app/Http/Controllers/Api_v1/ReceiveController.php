<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Receive;
use App\Http\Resources\ReceiveResource;
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
}
