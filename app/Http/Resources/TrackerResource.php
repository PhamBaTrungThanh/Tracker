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
        if ($this->recieves) {
            dd($this->recieves);
        }
        return [
            'id' => $this->id,
            'unit' => $this->unit,
            'recieved_unit' => $this->recieved_unit,
            'recieved_at' => $this->recieved_at,
            'cost' => $this->cost,
            'total' => $this->total,
            'notes' => "",
            'total_received' => $this->total_received,
            'material' => new Material($this->whenLoaded('material')),
        ];
    }
}
