<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    protected $fillable = [
        'content',
        'actor_id',
        'action',
        'title',
    ];
    public function parent()
    {
        return $this->morphTo();
    }
    public function actor()
    {
        return $this->hasOne(User::class, 'id', 'actor_id');
    }
}
