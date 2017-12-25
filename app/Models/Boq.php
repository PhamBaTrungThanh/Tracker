<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Boq extends Model
{
    protected $fillable = ['unit', 'price', 'description', 'name', 'total'];
}
