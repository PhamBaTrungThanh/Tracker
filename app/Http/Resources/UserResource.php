<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Support\Facades\Storage;
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
            "id" => $this->id,
            "username" => $this->username,    
            "label" => $this->label(),
            "name" => $this->name,
            "first_name" => substr($this->name, strrpos($this->name, " ") + 1),
            "joined_at" => $this->joined_at,
            "mariage_status" => $this->mariage_status,
            "family_status" => $this->family_status,
            "current_workplace" => $this->current_workplace,
            "current_job" => $this->current_job,
            "address" => $this->address,
            "phone_number" => $this->phone_number,
            "native_place" => $this->native_place,
            "id_number" => $this->id_number,
            "uid" => $this->UID,
            "workplace" => $this->workplace,
            "role" => $this->role,
            "birthday" => ($this->birthday) ? $this->birthday->format('d/m/Y') : "",
            "order" => $this->order,
            "email" => $this->email,
            "avatar" => ($this->avatar) ? $this->avatar : asset(Storage::url("default-avatar.png")),

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
            "can_add_user_to_workgroup" => $this->can_add_user_to_workgroup(),
            "can_create_workgroup" => $this->can_create_workgroup()
        ];
    }
}
