<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(WorkTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(MaterialsTableSeeder::class);
        $this->call(TrackersTableSeeder::class);
        $this->call(RelationshipTablesSeeder::class);

    }
}
