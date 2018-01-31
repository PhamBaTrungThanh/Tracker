<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


use App\Models\Work;
use App\Models\Provider;
use App\Models\Invoice;
use App\Models\Tracker;
use App\Models\Material;
use App\Models\User;
use App\Models\Payment;
use App\Models\Receive;

use App\Http\Resources\WorkResource;
use App\Http\Resources\MaterialResource;
use App\Http\Resources\TrackerResource;
use App\Http\Resources\InvoiceResource;
use App\Http\Resources\ProviderResource;
use App\Http\Resources\ReceiveResource;
use App\Http\Resources\PaymentResource;
use App\Http\Resources\UserResource;

class WorkController extends Controller
{
    public function allData() 
    {
        return response()->json([
            'works' => WorkResource::collection(Work::all()),
            'materials' => MaterialResource::collection(Material::with('boq')->get()),
            'trackers' => TrackerResource::collection(Tracker::all()),
            'providers' => ProviderResource::collection(Provider::all()),
            'invoices' => InvoiceResource::collection(Invoice::all()),
            'payments' => PaymentResource::collection(Payment::all()),
            'receives' => ReceiveResource::collection(Receive::all()),
            'users' => UserResource::collection(User::all()),
        ]);
    }
    public function index()
    {
        return WorkResource::collection(Work::all());
        
    }
    public function getInvoices(Work $work, Request $request) {
        $invoices = $work->invoices()->when($request->filled('not_in'), function ($query) use ($request) {
            $not_in = explode(",", $request->query('not_in'));
            return $query->whereNotIn('id', $not_in);
        })->get();


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
