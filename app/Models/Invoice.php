<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
class Invoice extends Model
{

    protected $table = "contracts";
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('invoice', function (Builder $builder) {
            $builder->where('type', 'invoice');
        });
    }

    public function provider()
    {
        return $this->belongsTo(Provider::class);
    }
}

