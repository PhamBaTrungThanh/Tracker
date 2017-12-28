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
            'boq_total' => ($this->boq) ? $this->boq->unit * $this->boq->price : 0,
            'total_unit' => $this->total_unit,
            'total_sum' => $this->total_price,
            'invoice_trackers' => $this->when($this->invoice_trackers, $this->invoice_trackers)
        ];
    }
}
