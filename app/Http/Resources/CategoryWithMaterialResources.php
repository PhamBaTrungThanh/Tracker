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
            'children' => $this->when(count($this->children), self::collection($this->children)),
            'materials' => $this->when(count($this->materials), MaterialResources::collection($this->materials)),
            'expanded' => ($this->depth == 0) ? true : false,
            'depth' => $this->depth,
            'type' => 'category',
        ];
    }
}
