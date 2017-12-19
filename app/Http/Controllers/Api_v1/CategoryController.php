<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Category;

class CategoryController extends Controller
{
    public function index() 
    {
        return \App\Http\Resources\CategoryResources::collection(Category::get()->toTree());
    }

    public function store(Request $request)
    {
        foreach ($request->input('categories') as $new_category) 
        {
            $category = new Category();
            $category->name = $new_category;
            
            if ($request->input('parent_id') !== 0) 
            {
                $category->parent_id = $request->input('parent_id');
            }
            $category->save();
        }
        
        return response()->JSON([
            'message' => 'success',
        ]);
    }
}
