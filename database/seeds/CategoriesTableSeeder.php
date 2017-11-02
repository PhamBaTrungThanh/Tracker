<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => 'ĐIỆN',
            'description' => '',
            'parent_id' => 1,
            'parent_type' => 'App\Models\Work',

        ]);

        DB::table('categories')->insert([
            'name' => "Cáp cadisun/Nam Hà Nội",
            "description" => "",
            "parent_id" => 1,
            "parent_type" => "App\Models\Category",
        ]);
    }
}
