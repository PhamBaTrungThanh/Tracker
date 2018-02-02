<?php

namespace App\Http\Controllers;

use App\Models\Provider;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Resources\ProviderResource;
class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {      
        $user = (new UserResource(auth()->user()))->toArray(request());
        $providers = ProviderResource::collection(Provider::all())->toArray(request());
        return view('home')
            ->with('user', json_encode($user))
            ->with('providers', json_encode($providers));
    }
}