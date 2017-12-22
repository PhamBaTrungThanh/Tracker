<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Tracker extends Model
{
    public function contracts()
    {
        return $this->belongsTo(Contract::class, 'contract_id');
    }
    public function invoices()
    {
        return $this->belongsTo(Invoice::class, 'contract_id');
    }
    public function material()
    {
        return $this->belongsTo(Material::class);
    }
}