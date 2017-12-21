<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class WorkResource extends Resource
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
            'description' => $this->description,
            'client' => $this->client,
            'started_at' => '2017-01-01 12:00:00',
            'created_at' => $this->created_at,
            'showDetail' => false,
            'image' => "http://via.placeholder.com/350x150",
            'categories' => CategoryResources::collection($this->categories),
            'materials' => MaterialResources::collection($this->materials),
        ];
    }
}
