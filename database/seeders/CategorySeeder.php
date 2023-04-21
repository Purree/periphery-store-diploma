<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @psalm-suppress UndefinedMagicMethod
     */
    public function run(): void
    {
        // Separated because of having parents
        Category::factory()->withProducts(
            Category::factory(10)
                ->create()
        );

        Category::factory()->withProducts(
            Category::factory(90)
                ->create()
        );
    }
}
