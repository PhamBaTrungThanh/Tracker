<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    public function trackersInWork(int $work)
    {
        return $this->hasMany(Trackers::class)->where('work_id', $work);
    }

    public function boqInWork(int $work)
    {
        return $this->hasMany(Boq::class)->limit(1)->where('work_id', $work);
    }
    public function contractInWork(int $work)
    {
        return $this->hasMany(Contract::class)->limit(1)->where('work_id', $work);
    }
}
