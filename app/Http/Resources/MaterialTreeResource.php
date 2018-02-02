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
            'children' => self::collection($this->children),
        ];
    }
}
