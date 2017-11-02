<?php

use Illuminate\Database\Seeder;

class MaterialsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('materials')->insert([
            'uid' => "CADI001",
            "name" => "Cáp 1x10",
            "per" => "m",
            "description" => "",
            "brand" => "Cadisun",
        ]);
        DB::table('materials')->insert([
            'uid' => "CADI002",
            "name" => "Cáp 1x20",
            "per" => "m",
            "description" => "",
            "brand" => "Cadisun",
        ]);
        DB::table('materials')->insert([
            'uid' => "CADI003",
            "name" => "Cáp 1x30",
            "per" => "m",
            "description" => "",
            "brand" => "Cadisun",
        ]);
    }
}
