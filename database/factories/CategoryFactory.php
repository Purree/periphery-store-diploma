<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'parent_id' => $this->faker->boolean ? Category::query()->inRandomOrder()->first()?->id : null,
            'title' => $this->faker->text(75),
            'meta_title' => $this->faker->word(),
            'slug' => $this->faker->unique()->slug(),
            'image' => null,
            'description' => $this->faker->text(),
        ];
    }

    public function withProducts(Collection $categories): Collection
    {
        $categories->each(function (Category $category): void {
            $maxProductCount = $this->faker->numberBetween(0, 10);

            if ($maxProductCount === 0) {
                return;
            }

            $totalProductsCount = Product::query()->count();

            if ($totalProductsCount < $maxProductCount) {
                Product::factory()
                    ->count($maxProductCount - $totalProductsCount)
                    ->create();
            }

            $category->products()->attach(Product::query()->inRandomOrder()->limit($maxProductCount)->get('id'));
        });

        return $categories->load('products');
    }
}
