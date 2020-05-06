<?php

use App\Recompenses;
use Illuminate\Database\Seeder;

class RecompenseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Recompenses::class, 5)->create();
    }
}
