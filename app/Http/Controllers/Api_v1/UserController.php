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
        $user = $request->user();
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
