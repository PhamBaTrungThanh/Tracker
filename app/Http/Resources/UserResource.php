<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class UserResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return 
        [
            "user_id" => $this->id,
            "username" => $this->username,    
            "label" => $this->label,
            "name" => $this->name,
            "can_see_reports" => $this->can_see_reports,
            "can_add_invoice" => $this->can_add_invoice,
            "can_add_payment" => $this->can_add_payment,
            "can_add_receive" => $this->can_add_receive,
            "can_add_user" => $this->can_add_user,
        ];
    }
}
