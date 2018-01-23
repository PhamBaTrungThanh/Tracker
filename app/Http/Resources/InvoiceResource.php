<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class InvoiceResource extends Resource
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
            "status" => $this->status,
            "total" => $this->total,
            "type" => "invoice",
            "payment_total" => $this->payment_total,
            "work_id" => $this->work_id,
            "provider_id" => $this->provider_id,
            "count_payments" => $this->payments_count,
            "count_receives" => $this->receives_count,
        ];
    }
}
