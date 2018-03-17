<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class BoqResource extends Resource
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
            'material_id' => $this->material_id,
            'unit' => $this->unit,
            'price' => $this->price,
            'vat' => $this->vat,
            'vat_sum' => $this->vat_sum,
            'total' => $this->total,
            'is_new' => false,
        ];
    }
}
