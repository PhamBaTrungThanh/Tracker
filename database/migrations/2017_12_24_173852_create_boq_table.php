<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBoqTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('boqs', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('material_id');
            $table->string('name');
            $table->string('description');
            $table->bigInteger('unit')->unsigned();
            $table->decimal('price', 20,4)->unsigned();
            $table->decimal('total', 40,10)->unsigned();
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
        Schema::dropIfExists('boq');
    }
}
