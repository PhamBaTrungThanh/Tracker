<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WorkgroupResource extends JsonResource
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
            "isPrivate" => $this->is_private,
            "depth" => $this->depth,
            "leaderId" => $this->leader_id,
            "creatorId" => $this->creator_id,
            "users" => $this->whenLoaded('users', function() {
                return $this->users->map(function ($user) {
                    return [
                        "userId" => $user->pivot->user_id,
                        "role" => $user->pivot->role,
                    ];
                }); 
            }),
        ];
    }
}
