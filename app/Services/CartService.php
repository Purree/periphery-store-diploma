<?php

namespace App\Services;

use App\Exceptions\CartAlreadyExistsException;
use App\Models\Cart;
use App\Models\CartStatus;
use App\Enums\Structural\CartStatus as CartStatusEnum;
use App\Models\User;

class CartService
{
    /**
     * Create new cart
     *
     * @param  User  $user
     * @throws CartAlreadyExistsException
     * @return Cart
     */
    public function store(User $user): Cart
    {
        if ($user->activeCart()->exists()) {
            throw new CartAlreadyExistsException();
        }

        /** @psalm-suppress UndefinedMagicPropertyFetch */
        $newCartStatusId = CartStatus::query()->firstWhere('name', CartStatusEnum::new->name)->id;

        return Cart::query()->create(['user_id' => $user->id, 'status_id' => $newCartStatusId]);
    }
}
