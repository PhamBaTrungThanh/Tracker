<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Category;

class MaterialController extends Controller
{
    public function index() 
    {
        return \App\Http\Resources\CategoryWithMaterialResources::collection(Category::with('materials')->get()->toTree());
    }

    public function categories()
    {
        return \App\Http\Resources\CategoryResources::collection(Category::get()->toTree());
    }
}
