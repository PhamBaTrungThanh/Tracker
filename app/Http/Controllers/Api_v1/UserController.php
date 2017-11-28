<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
class UserController extends Controller
{
    public function index(Request $request)
    {
        return new UserResource($request->user());
    }
}
