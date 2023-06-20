<?php

namespace App\Services;

use App\Enums\Structural\Statuses\CartStatus as CartStatusEnum;
use App\Exceptions\CartAlreadyExistsException;
use App\Models\Cart;
use App\Models\CartStatus as CartStatusModel;
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
        if ($this->checkIsUserHasActiveCart($user)) {
            throw new CartAlreadyExistsException();
        }

        /** @psalm-suppress UndefinedMagicPropertyFetch */
        $newCartStatusId = CartStatusModel::getIdFromEnum(CartStatusEnum::new);

        return Cart::query()->create(['user_id' => $user->id, 'status_id' => $newCartStatusId]);
    }

    public function checkIsUserHasActiveCart(User $user): bool
    {
        return $user->activeCart()->exists();
    }

    public function updateStatus(Cart $cart, CartStatusEnum $status): void
    {
        $cart->update([
            'status_id' =>
                CartStatusModel::getIdFromEnum($status),
        ]);
    }
}
