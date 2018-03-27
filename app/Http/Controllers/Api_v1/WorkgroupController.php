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
            $workgroup->leader_id = $request->leader_id;
            $workgroup->save();
            if ($workgroup->leader_id) {
                $workgroup->users()->attach([
                     $workgroup->leader_id => ["role" => "leader"],
                ]);               
            }

            return new WorkgroupResource($workgroup->loadMissing('users'));
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
        if ($request->action === "update_workgroup") {
            $workgroup = Workgroup::find($id);
            $workgroup->name = $request->name;
            $workgroup->is_private = $request->is_private;
            if ($workgroup->leader_id !== $request->leader_id) {
                if ($workgroup->leader_id !== 0) {
                    $workgroup->users()->updateExistingPivot($workgroup->leader_id, ["role" => "member"]);
                }
                if ($request->leader_id !== 0) {
                    $workgroup->users()->updateExistingPivot($request->leader_id, ["role" => "leader"]);
                }
                $workgroup->leader_id = $request->leader_id;
            }
            $workgroup->save();
            $workgroup->loadMissing('users');
            return new WorkgroupResource($workgroup);            
        }
        if ($request->action === "add_new_users") {
            $workgroup = Workgroup::find($id);
            $workgroup->users()->attach($request->user_list);
            $workgroup->save();
            $workgroup->loadMissing('users');
            return new WorkgroupResource($workgroup);
        }
        return response()->json([], 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $workgroup = Workgroup::find($id);
        $workgroup->users()->detach();
        $workgroup->delete();
        return response()->json(['message' => 'success'], 200);
    }
}
