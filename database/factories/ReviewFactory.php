<?php

namespace Database\Factories;

use Illuminate\Support\Facades\App;
use App\Models\Review;
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
        $modelInstanceFactory = App::make(\Database\Factories\ModelInstanceFactory::class);

        return [
            'product_id' => $modelInstanceFactory->createProduct()->id,
            'user_id' => $modelInstanceFactory->createUser()->id,
            'is_anonymous' => $this->faker->boolean(),
            'rating' => $this->faker->numberBetween(0, 5),
            'advantages' => $this->faker->text(75),
            'disadvantages' => $this->faker->text(75),
            'comments' => $this->faker->text(75),
        ];
    }
}
