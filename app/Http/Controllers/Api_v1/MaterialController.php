<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Category;
use App\Models\Material;
class MaterialController extends Controller
{
    public function index() 
    {
        return \App\Http\Resources\CategoryWithMaterialResources::collection(Category::with('materials')->withDepth()->get()->toFlatTree());
    }

    public function store(Request $request)
    {
        if ($request->input('materials')) {
            foreach ($request->input('materials') as $new_material) {
                $material = new Material();
                $material->name = $new_material['name'];
                $material->brand = ($new_material['brand']) ? $new_material['brand'] : "";
                $material->current_price = ($new_material['current_price']) ? $new_material['current_price'] : 0;
                $material->per = ($new_material['per']) ? $new_material['per'] : "m";
                $material->currency = ($new_material['currency']) ? $new_material['currency'] : "vnđ" ;
                $material->category_id = $request->input('category_id');
                $material->save();
            }
        }
        return response()->JSON([
            'message' => 'success',
        ]);
    }

    public function show(Material $material)
    {
        $material->load(['trackers', 'trackers.invoice', 'trackers.invoice.provider']);
        return new \App\Http\Resources\MaterialDetails($material);
    }
}
