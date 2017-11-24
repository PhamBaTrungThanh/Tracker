<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
class Invoice extends Model
{

    protected $table = "trackers";
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('invoice', function (Builder $builder) {
            $builder->where('type', 'invoice');
        });
    }
}

