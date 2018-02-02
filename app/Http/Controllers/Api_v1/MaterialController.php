<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Tracker;
use App\Models\Material;

use App\Http\Resources\TrackerResource;
use App\Http\Resources\MaterialResource;
use App\Http\Resources\MaterialTreeResource;
class MaterialController extends Controller
{
    public function index(Request $request) 
    {
        return MaterialTreeResource::collection(Material::all()->toTree());
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
        $material->invoice_trackers = TrackerResource::collection($material->trackers->filter( function ($tracker) {
            return $tracker->invoice->type === "invoice";
        }));
        return new MaterialResource($material);
    }
}
