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
            "label" => $this->label(),
            "name" => $this->name,
            "can_see_reports" => true,
            "can_add_invoice" => $this->can_add_invoice(),
            "can_edit_invoice" => $this->can_edit_invoice(),
            "can_delete_invoice" => $this->can_delete_invoice(),
            "can_add_payment" => $this->can_add_payment(),
            "can_edit_payment" => $this->can_edit_payment(),
            "can_delete_payment" => $this->can_delete_payment(),
            "can_add_receive" => $this->can_add_receive(),
            
            "can_add_user" => $this->can_add_user(),

            "can_add_work" => $this->can_add_work(),
            "can_edit_work" => $this->can_edit_work(),
            "can_delete_work" => $this->can_delete_work(),
        ];
    }
}
