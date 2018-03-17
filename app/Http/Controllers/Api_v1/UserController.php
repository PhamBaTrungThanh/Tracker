<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
class UserController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        return new UserResource($request->user());
    }
    public function getAll()
    {
        return UserResource::collection(User::all());
    }
    public function store(Request $request)
    {
        $user = new User;

        $user->name = $request->name;
        $user->username = str_slug($request->name);
        $user->role = $request->role;
        $user->email = $request->email;
        $user->password = bcrypt("1234");
        $user->joined_at = $request->joined_at;
        $user->mariage_status = $request->mariage_status;
        $user->family_status = $request->family_status;
        $user->current_workplace = $request->current_workplace;
        $user->current_job = $request->current_job;
        $user->address = $request->address;
        $user->phone_number = $request->phone_number;
        $user->native_place = $request->native_place;
        $user->id_number = $request->id_number;
        $user->uid = $request->UID;
        $user->workplace = $request->workplace;
        $user->birthday = ($request->filled('birthday')) ?  Carbon::createFromFormat("d/m/Y", $request->birthday) : null;

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

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        $json = [
            'success' => true,
            'code' => 200,
            'message' => 'You are Logged out.',
        ];
        return response()->json($json, 200);
    }
}
