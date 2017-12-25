<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
class Invoice extends Model
{
    /*
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('invoice', function (Builder $builder) {
            $builder->where('type', 'invoice');
        });
    }
    */
    protected $dates = [
        'created_at',
        'updated_at',
        'signed_at',
    ];
    public function provider()
    {
        return $this->belongsTo(Provider::class);
    }
    public function payments() 
    {
        return $this->hasMany(Payment::class);
    }
    public function trackers()
    {
        return $this->hasMany(Tracker::class);
    }
}

