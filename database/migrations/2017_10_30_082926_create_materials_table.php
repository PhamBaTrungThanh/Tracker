<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMaterialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('materials', function (Blueprint $table) {
            $table->increments('id');
            $table->string('uid')->nullable();
            $table->string('name');
            $table->integer('category_id');
            $table->string('brand')->nullable();
            $table->string('currency')->default('vnđ');
            $table->decimal('boq_price', 12, 4)->unsigned()->nullable();
            $table->bigInteger('boq_unit')->unsigned()->nullable();
            $table->text('description')->nullable();
            $table->string('per');
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
        Schema::dropIfExists('materials');
    }
}
