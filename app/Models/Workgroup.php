<?php

namespace App\Models;
use Kalnoy\Nestedset\NodeTrait;
use Illuminate\Database\Eloquent\Model;

class Workgroup extends Model
{
	use NodeTrait;

    public function users() 
    {
    	return $this->belongsToMany(User::class)->withPivot('role');
    }

    public function categories()
    {
    	return $this->morphMany(Category::class, 'parent')->orderBy('order', 'asc');
    }
}
