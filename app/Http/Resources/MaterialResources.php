<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class MaterialResources extends Resource
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
            'category_id' => $this->category_id,
            'name' => $this->name,
            'label' => $this->name,
            'description' => $this->description,
            'per' => $this->per,
            'brand' => $this->brand,
            'type' => 'material',
            'currency' => $this->currency,
            'boq_unit' => ($this->boq) ? $this->boq->unit : 0,
            'boq_price' => ($this->boq) ? $this->boq->price : 0,
            'invoice_count' => $this->invoice_count,
            'total_unit' => $this->total_unit,
            'total_price' => $this->total_price,
        ];
    }
}
