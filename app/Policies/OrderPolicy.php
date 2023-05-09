<?php

namespace App\Policies;

use App\Enums\Structural\Permission;
use App\Models\Order;
use App\Models\User;

class OrderPolicy
{
    public function before(?User $user, string $ability): bool|null
    {
        if ($user?->isAdministrator()) {
            return true;
        }

        return null;
    }

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $this->canUserBuyProduct($user);
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Order $order): bool
    {
        return $this->canUserBuyProduct($user) && $order->user->id === $user->id;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $this->canUserBuyProduct($user);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Order $order): bool
    {
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Order $order): bool
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Order $order): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Order $order): bool
    {
        return false;
    }

    private function canUserBuyProduct($user): bool
    {
        return $user->hasPermission(Permission::buy_products);
    }
}
