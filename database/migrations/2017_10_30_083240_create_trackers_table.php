<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTrackersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trackers', function (Blueprint $table) {
            $table->increments('id');
            
            $table->integer('invoice_id')->unsigned();
            $table->integer('material_id')->unsigned();
           
            $table->date('bought_at')->nullable();
            $table->bigInteger('unit')->unsigned()->nullable();

            $table->bigInteger('received_unit')->unsigned()->nullable();
            
            $table->decimal('cost', 20, 4)->unsigned()->nullable();
            $table->decimal('total', 40, 10)->unsigned()->nullable();

            $table->bigInteger('pay_unit')->unsigned()->nullable();
            $table->decimal('pay_total', 40, 10)->unsigned()->nullable();

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
        Schema::dropIfExists('trackers');
    }
}
