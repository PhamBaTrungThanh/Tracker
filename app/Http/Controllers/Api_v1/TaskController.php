<?php

namespace App\Http\Controllers\Api_v1;

use App\Models\Task;
use App\Http\Resources\TaskResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }


    public function today(Request $request)
    {

        $tasks = Task::where('user_id', $request->user()->id)
                    ->whereDate('created_at', Carbon::now()->toDateString())
                    ->get();

        return TaskResource::collection($tasks);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->filled('tasks')) {
            $tasks = $request->input('tasks');
            $response = [];
            
            foreach ($tasks as $task) {
                
                $model = new Task;
                $model->user_id = $request->user()->id;
                $model->work_id = $task['work_id'];
                $model->from = Carbon::createFromFormat("Hi", $task['from'])->toTimeString();
                $model->to = Carbon::createFromFormat("Hi", $task['to'])->toTimeString();
                $model->content = $task['content'];
                $model->save();

                $response[] = new TaskResource($model);
            }
            return response()->json([
                'data' => $response,
            ], 200);
        } else {
            return response()->json([], 400);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function massUpdate(Request $request, Task $task)
    {
        if ($request->filled('tasks')) {
            $tasks = $request->input('tasks');
            $affected = [];
            
            foreach ($tasks as $task) {
                
                $model = Task::find($task["id"]);
                $model->work_id = $task["work_id"];
                $model->from = Carbon::createFromFormat("Hi", $task['from'])->toTimeString();
                $model->to = Carbon::createFromFormat("Hi", $task['to'])->toTimeString();
                $model->content = $task['content'];
                $model->save();

                $affected[] = new TaskResource($model);
            }
            return response()->json([
                'data' => $affected,
            ], 200);
        } else {
            return response()->json([], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        //
    }
}
