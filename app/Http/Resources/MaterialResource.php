<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class MaterialResource extends Resource
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
            'uid' => $this->uid,
            'name' => $this->name,
            'label' => $this->name,
            'description' => $this->description,
            'per' => $this->per,
            'brand' => $this->brand,
            'type' => 'material',
            'currency' => $this->currency,
            'total_unit' => $this->total_unit,
            'total_sum' => $this->total_price,
            'received_unit' => $this->received_unit,
            'work_id' => $this->work_id,
        ];
    }
}
