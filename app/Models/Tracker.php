<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Tracker extends Model
{
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
}