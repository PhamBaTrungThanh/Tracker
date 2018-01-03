<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class WorkResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'client' => $this->client,
            'started_at' => '2017-01-01 12:00:00',
            'created_at' => $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->diffForHumans(),
            'image_cover' => $this->image_cover,
            'total_sum' => $this->invoices->sum('total'),
            'boq_sum' => $this->boq_sum,
            'paid_sum' => $this->invoices->sum('payment_total'),
            'categories' => CategoryResource::collection($this->whenLoaded('categories')),
            'flatten' => $this->when($this->flatten, $this->flatten),
            'invoices' => InvoiceResource::collection($this->whenLoaded('invoices')),
            'contracts' => ContractResource::collection($this->whenLoaded('contracts')),
            'category_count' => $this->category_count,
            'material_count' => $this->material_count,
        ];
    }
}
