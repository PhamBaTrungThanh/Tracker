<?php

namespace App\Http\Resources\Trackers;

use Illuminate\Http\Resources\Json\Resource;

class WithInvoiceResources extends Resource
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
            'invoice_id' => $this->invoice->id,
            'invoice_name' => $this->invoice->name,
            'invoice_uid' => $this->invoice_uid,
            'provider_name' => $this->invoice->provider->name,
            'provider_id' => $this->invoice->provider->id,
            'signed_at' => $this->invoice->signed_at,
            'unit' => $this->unit,
            'recieved_unit' => $this->recieved_unit,
            'recieved_at' => $this->recieved_at,
            'cost' => $this->cost,
            'total' => $this->total,
            'notes' => "",
        ];
    }
}
