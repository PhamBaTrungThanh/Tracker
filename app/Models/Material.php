<?php

namespace App\Models;

use Kalnoy\Nestedset\NodeTrait;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use NodeTrait;

    protected $fillable = ['name', 'per', 'currency', 'description', 'brand'];

    public function trackers()
    {
        return $this->hasMany(Tracker::class);
    }
    public function boqs() 
    {
        return $this->hasMany(Boq::class);
    }
    public function work()
    {
        return $this->hasOne(Work::class);
    }
    
}
