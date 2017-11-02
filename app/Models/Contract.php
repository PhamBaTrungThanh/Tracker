<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{

    protected $table = "tracker";
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('boq', function (Builder $builder) {
            $builder->where('type', 'contract');
        });
    }
}
}
