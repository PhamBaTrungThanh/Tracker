<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Workgroup;
use App\Http\Resources\WorkgroupResource;
class WorkgroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $workgroup = Workgroup::defaultOrder()->withDepth()->with('users')->get();
        return WorkgroupResource::collection($workgroup);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->filled('name') && $request->filled('is_private')) {
            $workgroup = new Workgroup;
            $workgroup->name = $request->name;
            $workgroup->is_private = $request->is_private;
            $workgroup->parent_id = $request->parent_id;
            $workgroup->creator_id = $request->user()->id;
            $workgroup->save();
            return new WorkgroupResource($workgroup);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $workgroup = Workgroup::with('users')->withDepth()->find($id)->limit(1)->get();
        return new WorkgroupResource($workgroup);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $workgroup = Workgroup::find($id);
        $workgroup->name = $request->name;
        $workgroup->is_private = $request->is_private;
        $workgroup->save();
        return new WorkgroupResource($workgroup);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
