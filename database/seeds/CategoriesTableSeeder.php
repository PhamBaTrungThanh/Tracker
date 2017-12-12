<?php

use Illuminate\Database\Seeder;
use App\Models\Category;
class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $node = Category::create([
            'name' => "ĐIỆN",
            "children" => [
                ["name" => "Dây cáp điện"],
                ["name" => "Tủ điện"],
                ["name" => "máy phát điện"],
            ],
        ]);
        $node = Category::create([
            'name' => "NƯỚC",
            "children" => [
                ["name" => "Máy bơm nước"],
                ["name" => "Ống nước"],
            ],
        ]);
    }
}
