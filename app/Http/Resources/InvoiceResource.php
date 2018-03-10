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
            "uid" => $this->uid,
            "type" => $this->type,
            "name" => $this->name,
            "signed_at" => $this->signed_at->format('d/m/Y'),
            "status" => $this->status,
            "total" => $this->total,
            "type" => "invoice",
            "payment_total" => $this->payment_total,
            "work_id" => $this->work_id,
            "provider_id" => $this->provider_id,
            "payments_count" => $this->payments_count,
            "receives_count" => $this->receives_count,
            "trackers_count" => $this->trackers_count,
        ];
    }
}
