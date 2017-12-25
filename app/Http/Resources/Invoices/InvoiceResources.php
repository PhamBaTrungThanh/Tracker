<?php

namespace App\Http\Resources\Invoices;

use Illuminate\Http\Resources\Json\Resource;
use \App\Http\Resources\Trackers\TrackerResource;
class InvoiceResources extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "type" => $this->type,
            "name" => $this->name,
            "signed_at" => $this->signed_at->format('d/m/Y'),
            "percent_complete" => "100",
            "trackers" => $this->when($this->trackers, TrackerResource::collection($this->trackers)),
            "payment_count" => $this->when($this->payments, $this->payments()->count()),
            
        ];
    }
}
