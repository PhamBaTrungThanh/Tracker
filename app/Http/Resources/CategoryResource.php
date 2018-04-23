<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "parent_id" => $this->parent_id,
            "parent_type" => snake_case(class_basename($this->parent_type)),
            "order" => $this->order,
            "updated_at" => $this->updated_at,
            "type" => $this->type,
        ];
    }
}