<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;
use Carbon\Carbon;
class TaskResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    private function toShortTime($string) {
        $str = explode(":", $string);
        return $str[0].$str[1];
    }
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'work_id' => $this->work_id,
            'from' => $this->toShortTime($this->from),
            'to' => $this->toShortTime($this->to),
            'content' => $this->content,
            'created_at' => $this->created_at->format("d/m/Y"),

        ];
    }
}
