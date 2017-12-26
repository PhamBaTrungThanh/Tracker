<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Tracker extends Model
{
    protected $appends = [
        'total_received'
    ];
    public function receives()
    {
        return $this->belongsToMany(Receive::class);
    }
    public function contract()
    {
        return $this->belongsTo(Contract::class, 'invoice_id');
    }
    public function invoice()
    {
        return $this->belongsTo(Invoice::class, 'invoice_id');
    }
    public function material()
    {
        return $this->belongsTo(Material::class);
    }
    public function provider()
    {
        return $this->hasManyThrough(
            Provider::class,
            Invoice::class,
            'id1',
            'id2',
            'id3',
            'id4' 
        );
    }


    public function getTotalReceivedAttribute()
    {
        $this->loadMissing('receives');
        return $this->receives->sum( function ($recieve) {
            return $recieve->pivot->unit;
        });
    }
}