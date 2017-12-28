<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableInvoices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('work_id')->unsigned();
            $table->integer('provider_id')->unsigned();
            $table->string('type')->default('invoice');
            $table->string('name');
            $table->string('slug');
            $table->date('signed_at')->nullable();
            $table->decimal('total', 40, 10)->nullable()->unsigned()->default(0);
            $table->decimal('payment_total', 40, 10)->nullable()->unsigned()->default(0);
            $table->string('uid')->nullable();
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
        Schema::dropIfExists('invoices');
    }
}
