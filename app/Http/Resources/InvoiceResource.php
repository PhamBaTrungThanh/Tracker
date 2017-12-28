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
            "trackers" => TrackerResource::collection($this->whenLoaded('trackers')),
            "total" => $this->total,
            "payment_total" => $this->payment_total,
            "work" => new WorkResource($this->whenLoaded('work')),
            "provider" => new ProviderResource($this->whenLoaded('provider')),
            "receives" => ReceiveResource::collection($this->whenLoaded('receives')),
            "payments" => PaymentResource::collection($this->whenLoaded('payments')),
        ];
    }
}
