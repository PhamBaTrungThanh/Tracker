<?php

namespace App\Http\Resources\Trackers;

use Illuminate\Http\Resources\Json\Resource;

class TrackerResource extends Resource
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
            'unit' => $this->unit,
            'recieved_unit' => ($this->recieved_unit) ? $this->recieved_unit : $this->unit,
            'recieved_at' => $this->recieved_at,
            'cost' => $this->cost,
            'total' => $this->total,
            'notes' => "",
            $this->mergeWhen($this->material, [
                'material_name' => $this->material->name,
            ]),
            $this->mergeWhen($this->invoice, [
                'invoice_id' => $this->invoice->id,
                'invoice_name' => $this->invoice->name,
                'invoice_uid' => $this->invoice_uid,
                'provider_name' => $this->invoice->provider->name,
                'provider_id' => $this->invoice->provider->id,
                'signed_at' => $this->invoice->signed_at,
            ]),
            

        ];
    }
}
