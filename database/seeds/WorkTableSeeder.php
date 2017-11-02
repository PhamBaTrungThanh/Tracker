<?php

use Illuminate\Database\Seeder;

class WorkTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('works')->insert([
            'name' => 'Vũ Trọng Phụng',
            'description' => '',
            'client' => 'Công ty A',
        ]);
    }
}
