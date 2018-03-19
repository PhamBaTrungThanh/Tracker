<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Workgroup extends Model
{
    public function users() {
    	return $this->belongsToMany(User::class);
    }
}
