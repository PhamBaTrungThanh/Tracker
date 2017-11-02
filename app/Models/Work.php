<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    public function categories()
    {
        return $this->morphMany('App\Models\Category', 'parent');
    }
}
