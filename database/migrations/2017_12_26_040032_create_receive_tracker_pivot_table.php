<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReceiveTrackerPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('receive_tracker', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('receive_id')->usigned();
            $table->bigInteger('tracker_id')->unsigned();
            $table->bigInteger('unit')->default(0)->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recieve_tracker');
    }
}
