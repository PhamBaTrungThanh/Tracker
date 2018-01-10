<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class NoteResource extends Resource
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
            "title" => $this->title,
            "content" => $this->content,
            "actor_id" => $this->actor_id,
            "actor_name" => $this->when('actor_name', $this->actor_name),
            "created_at" => $this->created_at->format('d/m/Y'),
        ];
    }
}
