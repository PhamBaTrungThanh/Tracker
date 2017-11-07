<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{

    protected $table = "trackers";
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('contract', function (Builder $builder) {
            $builder->where('type', 'contract');
        });
    }
}
