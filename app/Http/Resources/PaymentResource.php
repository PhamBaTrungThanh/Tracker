<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class PaymentResource extends Resource
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
            'paid_on' => $this->paid_on->format('d/m/Y'),
            'amount' => $this->amount,
            'method' => $this->method,
            'content' => $this->content,
            'invoice_id' => $this->invoice_id,
        ];
    }
}
