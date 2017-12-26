<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class CategoryResource extends Resource
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
            'label' => $this->name,
            'name' => $this->name,
            'children' => MaterialResource::collection($this->whenLoaded('materials')),
            'expanded' => true,
            'depth' => ($this->depth) ? $this->depth : 0,
            'type' => 'category',
        ];
    }
}
