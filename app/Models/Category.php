<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Category extends Model
{
    use NodeTrait;
    
    public function parent()
    {
        return $this->morphTo();
    }

    public function children()
    {
        return $this->morphMany('App\Models\Category', 'parent');
    }

    public function materials()
    {
        return $this->belongsToMany('App\Models\Material');
    }
}
