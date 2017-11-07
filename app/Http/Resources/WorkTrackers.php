<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class WorkTrackers extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */

    private function category_heuristic($category)
    {
        if ($category->children->count()) {
            $children = [];
            foreach ($category->children as $child) {
                $children[] = $this->category_heuristic($child);
            }
        }
        return [
            'category_id' => $category->id,
            'category_name' => $category->name,
            'children' => $children,
        ];
    }
    private function categories_collection($categories)
    {
        $heuristic_result = [];
        foreach ($categories as $category)
        {
            $heuristic_result[] = $this->category_heuristic($category);
        }
        return $heuristic_result;
    }
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'categories' => CategoryResource::collection($this->categories()->with(['children', 'materials'])->get()),
        ];
    }
}
