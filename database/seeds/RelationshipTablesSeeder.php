<?php

use Illuminate\Database\Seeder;

class RelationshipTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category_material')->insert([
            'category_id' => 2,
            'material_id' => 1,
            "note" => "",

        ]);
        DB::table('category_material')->insert([
            'category_id' => 2,
            'material_id' => 2,
            "note" => "",

        ]);
        DB::table('category_material')->insert([
            'category_id' => 2,
            'material_id' => 3,
            "note" => "",

        ]);
    }
}
