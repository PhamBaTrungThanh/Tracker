<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
class UserController extends Controller
{
    public function index(Request $request)
    {
        $rights = [
            0 => [
                'label' => "Admin",
                'can_see_reports' => true,
                'can_add_invoice' => true,
                'can_add_payment' => true,
                'can_add_receive' => true,
                'can_add_user' => true,
            ],
            1 => [
                'label' => "Giám đốc",
                'can_see_reports' => true,
                'can_add_invoice' => true,
                'can_add_payment' => true,
                'can_add_receive' => true,
                'can_add_user' => true,
            ],
            2 => [
                'label' => "Phòng kế toán",
                'can_see_reports' => true,
                'can_add_invoice' => false,
                'can_add_payment' => true,
                'can_add_receive' => true,
                'can_add_user' => false,                
            ],
            3 => [
                'label' => "Phòng dự án",
                'can_see_reports' => true,
                'can_add_invoice' => true,
                'can_add_payment' => false,
                'can_add_receive' => false,
                'can_add_user' => false,   
            ],
        ];
        $user = $request->user();
        $role = $user->role;
        $user->label = $rights[$role]['label'];
        $user->can_see_reports = $rights[$role]['can_see_reports']; 
        $user->can_add_invoice = $rights[$role]['can_add_invoice']; 
        $user->can_add_payment = $rights[$role]['can_add_payment']; 
        $user->can_add_receive = $rights[$role]['can_add_receive']; 
        $user->can_add_user =  $rights[$role]['can_add_user']; 
        return new UserResource($request->user());
    }

    public function store(Request $request)
    {
        $user = new User;
        $user->name = $request->name;
        $user->username = str_slug($request->name);
        $user->role = $request->role;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();
    }
    public function update(Request $request, User $user)
    {
        if ($request->action === "change_password") 
        {
            $user->password = bcrypt($request->password);
            $user->save();
        }
    }
}
