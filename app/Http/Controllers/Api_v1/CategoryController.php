<?php

namespace App\Http\Controllers\Api_v1;

use Validator;

use App\Models\Category;
use App\Models\Workgroup;
use App\Models\Project;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), ['
            "parent_id" => "required|integer",
            "parent_type" => "required|in:workgroup,project",
            "name" => "required",
        '])->validate();
        $parent = ($request->parent_type === "workgroup") ? Workgroup::withCount('categories')->find($request->parent_id) : Project::withCount('categories')->find($request->parent_id);
        if (!$parent) {
            return response()->json(["error" => "Parent Resource not found"], 404);
        }

        $category = $parent->categories()->create([
            "name" => $request->name,
            "order" => $parent->categories_count - 1,
        ]);
        return new CategoryResource($category);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        if ($request->action === "change_name") {
            $category->name = $request->input("data.name");
            $category->save();
            return new CategoryResource($category);
        }
        return response()->json(["error" => "no_sutable_action"], 400);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        if ($category->type === "uncategorized") {
            return response()->json(["error" => "Default category can not be deleted."], 400)
        }
        // find the root category
        $root = Category::where([
            "parent_id" => $category->parent_id,
            "parent_type" => $category->parent_type,
            "type" => "uncategorized"
        ])->first(1);
        // move all project to this category
        // delete the original
        $category->delete();
        return response()->json(["success" => true], 200);
    }
}
