<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Review>
 */
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
            'user_id' => $this->getRandomUserIdOrCreate(),
            'is_anonymous' => $this->faker->boolean(),
            'rating' => $this->faker->numberBetween(0, 5),
            'advantages' => $this->faker->text(75),
            'disadvantages' => $this->faker->text(75),
            'comments' => $this->faker->text(75),
        ];
    }

    private function getRandomProductIdOrCreate(): int
    {
        $product = Product::query()->inRandomOrder()->first() ?? Product::factory(1)->create()->first();

        return (int)$product->id;
    }

    private function getRandomUserIdOrCreate(): int
    {
        /** @psalm-suppress UndefinedMagicMethod */
        $user = User::query()->inRandomOrder()->first() ?? User::factory(1)->associateWithRoles()->create()->first();

        return $user->id;
    }
}
