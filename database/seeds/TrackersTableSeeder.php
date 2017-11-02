<?php

use Illuminate\Database\Seeder;

class TrackersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('trackers')->insert([
            "work_id" => 1,
            "parent_id" => 1,
            "parent_type" => "App\Models\Material",
            "type" => "boq",
            "unit" => 100,
            "cost" => 3600,
            "total" => 360000,

        ]);
        DB::table('trackers')->insert([
            "work_id" => 1,
            "parent_id" => 1,
            "parent_type" => "App\Models\Material",
            "type" => "contract",
            "unit" => 80,
            "cost" => 3000,
            "total" => 80*3000,
            "paid_at" => "2017-10-31",
            "pay_total" => 30000,


        ]);
    }
}
