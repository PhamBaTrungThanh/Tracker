<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class MaterialDetails extends Resource
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
            'id' => $this->id,
            'category_id' => $this->category_id,
            'currency' => $this->currency,
            'name' => $this->name,
            'description' => $this->description,
            'per' => $this->per,
            'boq_price' => 0,
            'boq_unit' => 0,
            'invoices' =>  Trackers\WithInvoiceResources::collection($this->trackers->filter(function ($tracker) {
                return $tracker->invoice !== null;
            })),
            'contract' => $this->trackers->filter(function ($tracker) {
                return $tracker->contract !== null;
            }),
        ];
    }
}
