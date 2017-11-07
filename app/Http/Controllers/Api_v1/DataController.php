<?php

namespace App\Http\Controllers\Api_v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Work;

use App\Http\Resources\WorkTrackers;

class DataController extends Controller
{
    public function workTrackers(Work $work)
    {

        return new workTrackers($work);
    }
}
