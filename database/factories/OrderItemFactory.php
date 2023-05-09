<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\App;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderItem>
 */
class OrderItemFactory extends Factory
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
            'order_id' => $modelInstanceFactory->createOrder()->id,
            'SKU' => $this->faker->unique()->asciify('********************'),
            'price' => $this->faker->numberBetween(0, 9999999),
            'discount' => $this->faker->numberBetween(0, 100),
            'quantity' => $this->faker->randomNumber(),
        ];
    }
}
