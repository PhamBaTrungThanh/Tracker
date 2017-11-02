<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Boq extends Model
{
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('boq', function (Builder $builder) {
            $builder->where('type', 'boq');
        });
    }
}
