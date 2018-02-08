<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class MaterialTreeResource extends Resource
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
            'parent_id' => $this->parent_id,
            'has_children' => ($this->children_count > 0) ? true : false,
            'depth' => $this->depth,
            'invoice_count' => $this->invoice_count,
            'total' => $this->total_price,
            'received_unit' => $this->received_unit
        ];
    }
}
