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

class WorkController extends Controller
{
    public function index()
    {
        return \App\Http\Resources\WorkResource::collection(Work::with(['categories', 'categories.materials', 'categories.materials.boq'])->get());
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
    private function findOrCreateProvider(Request $request) 
    {
        if ($request->provider_id === 0) {
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
            $provider_id = $request->provider_id;
        }
        return $provider_id;
    }
    public function update(Work $work, Request $request)
    {   
        if ($request->action === "new_contract" || $request->action === "new_invoice") {

            $provider_id = $this->findOrCreateProvider($request);
           
            $invoice = new Invoice();
            $invoice->name = ($request->action === 'new_contract') ? "Hợp đồng nguyên tắc" : "Đơn hàng";
            $invoice->work_id = $work->id;
            $invoice->signed_at = $request->signed_at;
            $invoice->slug = str_slug($invoice->name);
            $invoice->type = ($request->action === 'new_contract') ? "contract" : "invoice";
            $invoice->uid = $request->contract_number;
            $invoice->provider_id = $provider_id;
            $invoice->save();

            foreach ($request->list as $node) {
                if ($node["id"] === 0) {
                    $category = $work->categories()->create(['name' => $node['name']]);
                } else {
                    $category = $work->categories()->find($node["id"]);
                }
                
                foreach ($node['children'] as $material) {
                    if ($material['is_new']) {
                        $material_eloquent = $category->materials()->create([
                            'name' => $material['name'],
                            'per' => ($material['per']) ? $material['per'] : "m",
                            'currency' => $material['currency'],
                        ]);
                        $material_eloquent->boq()->create([
                            'price' => $material['boq_price'],
                            'unit' => $material['boq_unit'],
                            'description' => "",
                            'name' => "BOQ",
                            'brand' => $material['brand'],
                            'total' => (int) $material['boq_unit'] * (float) $material['boq_unit'],
                        ]);
                    } else {
                        $material_eloquent = $category->materials()->find($material['id']);
                    }

                    
                    $tracker = new Tracker();
                    $tracker->invoice_id = $invoice->id;
                    $tracker->material_id = $material_eloquent->id;
                    $tracker->unit = $material['unit'];
                    $tracker->cost = $material['price'];
                    $tracker->total = $material['unit'] * $material['price'];
                    $tracker->save();

                    if ($request->action === "new_invoice") {
                        $material_eloquent->invoice_count += 1;
                        $material_eloquent->total_unit += $material['unit'];
                        $material_eloquent->total_price += $tracker->total;
                        $material_eloquent->save();
                    }
                }
            }
        }
        return response()->json(['message' => 'success']);
    }
}
