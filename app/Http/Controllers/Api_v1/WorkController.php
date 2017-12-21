<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Work;
use App\Models\Provider;
use App\Models\Contract;
use App\Models\Category;
use App\Models\Tracker;

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

    public function update(Work $work, Request $request)
    {   
        if ($request->action === "new_contract") {
            if (!$request->selected_provider_id) {
                if (!$request->input('new_provider.name')) {
                    return response()->json(['error' => 'No provider name'], 400);
                } else {
                    $provider = new Provider();
                    $provider->name = $request->input('new_provider.name');
                    $provider->description = $request->input('new_provider.description');
                    $provider->address = $request->input('new_provider.address');
                    $provider->tax_number = $request->input('new_provider.tax_number');
                    $provider->slug = str_slug($provider->name);
                    $provider->save();
                    $provider_id = $provider->id;
                }
            } else {
                $provider_id = $request->selected_provider_id;
            }
            $contract = new Contract();
            $contract->name = "Hợp đồng nguyên tắc";
            $contract->work_id = $work->id;
            $contract->signed_at = $request->signed_at;
            $contract->slug = str_slug($contract->name);
            $contract->type = "contract";
            $contract->uid = $request->contract_number;
            $contract->provider_id = $provider_id;
            $contract->save();
            
            foreach ($request->list as $node) {
                $category = $work->categories()->firstOrCreate(['name' => $node['name']]);
                foreach ($node['children'] as $material) {
                    $material_eloquent = $category->materials()->firstOrCreate(['name' => $material['name']], ['per' => $material['per']]);
                    $tracker = new Tracker();
                    $tracker->contract_id = $contract->id;
                    $tracker->material_id = $material_eloquent->id;
                    $tracker->unit = $material['unit'];
                    $tracker->cost = $material['price'];
                    $tracker->total = $material['unit'] * $material['price'];
                    $tracker->save();
                }
            }
        }
        return response()->JSON(['success' => true]);
    }
}
