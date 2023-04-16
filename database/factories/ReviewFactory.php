<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Review;
use Illuminate\Database\Eloquent\Factories\Factory;

final class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => $this->getRandomProductIdOrCreate(),
            'parent_id' => $this->faker->boolean ? Review::query()->inRandomOrder()->first()?->id : null,
            'advantages' => $this->faker->text(75),
            'disadvantages' => $this->faker->text(75),
            'comments' => $this->faker->text(75),
        ];
    }

    private function getRandomProductIdOrCreate(): int
    {
        $product = Product::query()->inRandomOrder()->first() ?? Product::factory(1)->create()->first();

        return $product->id;
    }
}
