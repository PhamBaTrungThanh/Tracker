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
            'category_id' => $this->id,
            'category_name' => $this->name,
            'children' => $this->when($this->children->count(), CategoryResource::collection($this->children)),
            'materials' => $this->when(!$this->children->count(), MaterialInWorkDetails::collection($this->materials)),
        ];
    }
}
