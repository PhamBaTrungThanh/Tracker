<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
	protected $fillable = ['name', 'order', 'type'];
    public function parent()
    {
    	return $this->morphTo();
    }
    public function projects()
    {
    	return $this->hasMany(Project::class);
    }
}
