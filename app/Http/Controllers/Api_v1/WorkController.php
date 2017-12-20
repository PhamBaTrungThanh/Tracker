<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Work;

class WorkController extends Controller
{
    public function index()
    {
        return \App\Http\Resources\WorkResource::collection(Work::all());
    }
    public function store(Request $request)
    {
        $work = new Work();
        $work->name = $request->input('name');
        $work->description = ($request->input('description')) ? $request->input('description') : "Mô tả";
        $work->client = $request->input('client');
        $work->save();
        return response()->JSON([
            'message' => 'success',
        ]);
    }
}
