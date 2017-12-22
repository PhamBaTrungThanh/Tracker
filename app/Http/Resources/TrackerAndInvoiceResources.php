<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class TrackerAndInvoiceResources extends Resource
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
            'invoice_id' => $this->invoices->id,
            'invoice_name' => $this->invoices->name,
            'signed_at' => $this->invoices->signed_at,
            'paid_at' => $this->paid_at,
            'unit' => $this->unit,
            'recieved_unit' => $this->recieved_unit,
            'cost' => $this->cost,
            'total' => $this->total,
            'pay_unit' => $this->pay_unit,
            'pay_total' => $this->pay_total,
        ];
    }
}
