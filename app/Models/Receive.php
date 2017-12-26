<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Receive extends Model
{
    protected $dates = [
        'created_at',
        'updated_at',
        'received_at',
    ];


    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }
    public function trackers()
    {
        return $this->belongsToMany(Tracker::class)->withPivot('unit');
    }

}
