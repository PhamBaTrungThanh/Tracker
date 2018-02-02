<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class ReceiveResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'received_at' => $this->received_at->format('d/m/Y'),
            'invoice_id' => $this->invoice_id,
            'type' => "receive",
        ];
    }
}
