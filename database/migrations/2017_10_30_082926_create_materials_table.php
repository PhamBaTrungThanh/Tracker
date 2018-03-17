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
            $table->integer('work_id');
            $table->string('name');
            $table->string('brand')->nullable();
            $table->string('currency')->nullable();
            $table->bigInteger('total_unit')->default(0);
            $table->bigInteger('received_unit')->default(0);
            $table->decimal('total_price', 50, 10)->default(0);
            $table->bigInteger('invoice_count')->default(0);
            $table->text('description')->nullable();
            $table->string('per')->nullable();
            $table->timestamps();

            NestedSet::columns($table);
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
