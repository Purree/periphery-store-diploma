<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\App;

/**
 * @extends Factory<Order>
 */
class OrderFactory extends Factory
{
    public function definition(): array
    {
        $modelInstanceFactory = App::make(\Database\Factories\ModelInstanceFactory::class);

        return [
            'user_id' => $modelInstanceFactory->createUser()->id,
            'status_id' => $modelInstanceFactory->createOrderStatus()->id,
            'token' => $this->faker->unique()->asciify('***********'),
            'user_name_id' => $modelInstanceFactory->createUserName()->id,
            'user_mobile_id' => $modelInstanceFactory->createUserMobile()->id,
            'user_address_id' => $modelInstanceFactory->createUserAddress()->id,
        ];
    }
}
