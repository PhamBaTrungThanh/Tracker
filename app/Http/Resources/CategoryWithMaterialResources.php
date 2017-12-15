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
            'children' => count($this->children) ? self::collection($this->children) : (count($this->materials) ? MaterialResources::collection($this->materials) : null),
            'expanded' => (count($this->materials)) ? false : true,
            'depth' => $this->depth,
            'type' => 'category',
        ];
    }
}
