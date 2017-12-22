<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
class Contract extends Model
{

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('contract', function (Builder $builder) {
            $builder->where('type', 'contract');
        });
    }

    public function trackers()
    {
        return $this->hasMany(Tracker::class);
    }
    public function provider()
    {
        return $this->belongTo(Provider::class);
    }
}
