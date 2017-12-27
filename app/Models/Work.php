<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    public function trackers()
    {
        return $this->hasMany(Tracker::class);
    }
    public function materials()
    {
        return $this->hasManyThrough(Material::class, Category::class);
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class)->where('type', 'invoice');
    }
    public function contracts()
    {
        return $this->hasMany(Contract::class);
    }
}
