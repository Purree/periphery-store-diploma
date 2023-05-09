<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\App;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserMobile>
 */
class UserMobileFactory extends Factory
{
    public function definition(): array
    {
        $modelInstanceFactory = App::make(\Database\Factories\ModelInstanceFactory::class);

        return [
            'user_id' => $modelInstanceFactory->createUser()->id,
            'mobile' => $this->faker->bothify('+7##########')
        ];
    }
}
