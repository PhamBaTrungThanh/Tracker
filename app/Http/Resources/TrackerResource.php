<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\Materials\BasicMaterialResource as Material;
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
            'invoice' => new InvoiceResource($this->whenLoaded('invoice')),
            'material' => new MaterialResource($this->whenLoaded('material')),
            'unit' => $this->unit,
            'received_unit' => $this->received_unit,           
            'cost' => $this->cost,
            'unreceive' => $this->unit - $this->received_unit,
            'total' => $this->total,
            'unreceive_sum' => ($this->unit - $this->received_unit) * $this->cost,
            'note' => "",
        ];
    }
}
