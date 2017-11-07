<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class MaterialInWorkDetails extends Resource
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
            'material_id' => $this->id,
            'code' => $this->uid,
            'name' => $this->name,
            'brand'=> $this->brand,
            'per' => $this->per,
            'note' => $this->pivot->note,
            'boq' => $this->boqInWork($request->work->id)->get(),
            'contract' => $this->contractInWork($request->work->id)->get(),
        ];
    }
}
