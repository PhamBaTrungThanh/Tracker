<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $dates = [
        'created_at',
        'updated_at',
        'paid_on',
    ];
    protected $withCount = ['notes'];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }

    public function notes()
    {
        return $this->morphMany(Note::class, 'parent');
    }

    public function creator()
    {
        return $this->hasOne(User::class, 'id', 'created_by');
    }
}
