<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('password');
            $table->integer('role');
            $table->date('birthday')->default(null);
            $table->string('avatar')->default(null);
            $table->string('UID')->default(null);
            $table->string('id_number')->default(null);
            $table->string('native_place')->default(null);
            $table->string('phone_number')->default(null);
            $table->integer('order')->default(0);
            $table->string('workplace')->default(null);
            $talbe->string('address')->default(null);
            $table->string('current_job')->default(null);
            $table->string('current_workplace')->default(null);
            $table->string('family_status')->default(null);
            $table->string('mariage_status')->default(null);
            $table->string('joined_at')->default(null);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
