<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\Trackers\TrackerResource;
class MaterialDetails extends Resource
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
            'category_id' => $this->category_id,
            'currency' => $this->currency,
            'name' => $this->name,
            'description' => $this->description,
            'per' => $this->per,
            'boq_price' => $this->boq->price,
            'boq_unit' => $this->boq->unit,
            'boq_total' => $this->total,
            'brand' => $this->brand,
            'total_unit' => $this->total_unit,
            'total_price' => $this->total_price,
        ];
    }
}
