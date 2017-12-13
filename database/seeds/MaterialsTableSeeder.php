<?php

use Illuminate\Database\Seeder;
use App\Models\Material;
class MaterialsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Material::create([
            'uid' => "CADI001",
            "name" => "Cáp 1x10",
            "per" => "m",
            "description" => "",
            "brand" => "Cadisun",
            "category_id" => 2,
        ]);
        Material::create([
            'uid' => "CADI002",
            "name" => "Cáp 1x20",
            "per" => "m",
            "description" => "",
            "brand" => "Cadisun",
            "category_id" => 2,
        ]);
        Material::create([
            'uid' => "CADI003",
            "name" => "Cáp 1x30",
            "per" => "m",
            "description" => "",
            "brand" => "Cadisun",
            "category_id" => 2,
        ]);
    }
}
