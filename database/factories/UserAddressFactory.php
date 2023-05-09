<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\App;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserAddress>
 */
class UserAddressFactory extends Factory
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
            'user_id' => $modelInstanceFactory->createUser()->id,
            'address' => $this->faker->address()
        ];
    }
}
