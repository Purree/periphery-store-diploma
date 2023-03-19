<?php

namespace Database\Factories;

use App\Enums\Role;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
final class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'seller_id' => $this->getRandomSellerOrCreate()->id,
            'title' => $this->faker->text(75),
            'meta_title' => $this->faker->word(),
            'slug' => $this->faker->unique()->slug(),
            'description' => $this->faker->realText(),
            'preview_image' => $this->faker->imageUrl(),
            'SKU' => $this->faker->unique()->asciify('********************'),
            'price' => $this->faker->numberBetween(0, 9999999),
            'discount' => $this->faker->numberBetween(0, 100),
            'quantity' => $this->faker->randomNumber(),
            'is_available' => $this->faker->boolean(),
        ];
    }

    private function getRandomSellerOrCreate(): User
    {
        $seller = User::whereHas(
            'roles',
            static fn ($query) => $query->where('name', Role::seller->name)
        )->inRandomOrder()->first();

        if (empty($seller)) {
            $seller = User::factory()
                ->associateWithRoles(
                    Role::seller
                )->create();
        }

        return $seller;
    }
}
