<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Category;

class MaterialController extends Controller
{
    public function index() 
    {
        
    }

    public function categories()
    {
        return new \App\Http\Resources\CategoryResource(Category::all());
    }
}
