<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class CategoryWithMaterialResources extends Resource
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
            'name' => $this->name,
            'children' => MaterialResources::collection($this->materials),
            'expanded' => true,
            'depth' => $this->depth,
            'type' => 'category',
        ];
    }
}
