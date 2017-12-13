<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;

class Category extends Model
{
    use NodeTrait;

    public function materials()
    {
        return $this->hasMany('App\Models\Material');
    }
}
