<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('creator_id');
            $table->string('project_id');
            $table->integer('status')->default(0);
            $table->date('start_at')->nullable();
            $table->date('end_at')->nullable();
            $table->text('description')->nullable();
            $table->string('type')->default("task");
            $table->boolean('is_flag')->default(false);
            $table->timestamps();
            $table->nestedSet();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
