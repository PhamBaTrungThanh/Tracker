<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    protected $fillable = ['name', 'per'];

    public function trackers()
    {
        return $this->hasMany(Tracker::class);
    }

    public function contracts()
    {
        return $this->hasManyThrough(
            Contract::class,
            Tracker::class,
            "id",
            "id",
            "id",
            "contract_id"
        );
    }
}
