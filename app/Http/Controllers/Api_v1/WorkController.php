<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


use App\Models\Work;
use App\Models\Provider;
use App\Models\Contract;
use App\Models\Invoice;
use App\Models\Category;
use App\Models\Tracker;

use App\Http\Resources\WorkResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\MaterialResource;
class WorkController extends Controller
{
    public function index()
    {
        $works = Work::withCount(['invoices', 'contracts'])->get();
        return WorkResource::collection($works);
        
    }
    public function store(Request $request)
    {
        $work = new Work();
        $work->name = $request->input('name');
        $work->description = ($request->input('description')) ? $request->input('description') : "Mô tả";
        $work->client = $request->input('client');
        $work->started_at = $request->input('started_at');
        $work->save();
        return response()->JSON([
            'message' => 'success',
        ]);
    }
    public function show(Work $work)
    {
        $work->load(['categories', 'categories.materials', 'categories.materials.boq', 'contracts'])->load(['invoices' => function ($query) {
            $query->orderBy('name', 'asc')->orderBy('signed_at', 'desc')->with(['payments', 'provider', 'receives']);
        }]);
        $flatten_categories = [];
        $category_count = 0;
        $material_count = 0;
        $boq_sum = 0;
        foreach($work->categories as $category) {
            $category_count++;
            $flatten_categories[] = new CategoryResource($category);
            $children = isset($category['materials']) ? $category['materials'] : false;
            unset($category['materials']);

            if ($children !== false) {
                foreach( $children as $child ) {
                    $flatten_categories[] = new MaterialResource($child);
                }
                $material_count += count($children);
                $boq_sum += $child['boq']['total'];
            }
        }

        return (new WorkResource($work))->additional([
            'extra' => [
                'flatten' => $flatten_categories,
                'category_count' => $category_count,
                'material_count' => $material_count,
                'boq_sum' => $boq_sum,
            ],
        ]);
    }

    public function update(Work $work, Request $request)
    {   
    }
}
