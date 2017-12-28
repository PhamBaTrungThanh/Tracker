<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Tracker extends Model
{
    protected $dates = [
        'updated_at',
        'created_at',
        'received_at',
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


}