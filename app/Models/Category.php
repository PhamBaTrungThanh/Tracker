<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
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
