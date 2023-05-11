<?php

namespace App\Policies;

use App\Enums\Structural\Permission;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

class ProductPolicy
{
    public function before(?User $user, string $ability): bool|null
    {
        if (!array_key_exists($ability, ['viewAdditionalResourceData', 'buy'])) {
            return null;
        }

        if ($user?->isAdministrator() || $this->canUserManipulateAllProducts($user)) {
            return true;
        }

        return null;
    }

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(?User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(?User $user, Product $product): bool
    {
        return $this->viewAny($user) || $product->seller->id === $user?->id;
    }

    public function buy(User $user, Product $product): bool
    {
        return $product->is_available &&
            $product->inStock &&
            $user->id !== $product->seller->id &&
            $user->hasPermission(Permission::buy_products);
    }

    public function leaveReview(User $user, Product $product): bool
    {
        return $product->userReview()->exists() || $product->orderItems()->whereHas(
            'order',
            fn (Builder $builder) => $builder->where('user_id', $user->id)
        )->exists();
    }

    /**
     * Determine whether the user can view additional information in api resource its need to avoid n+1 problem.
     * Additionally, add check for viewAdditionalResourceData ability to before method and return null if it's true.
     */
    public function viewAdditionalResourceData(User $user, Product $product): bool
    {
        return $product->seller->id === $user->id;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->hasPermission(Permission::create_products);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Product $product): bool
    {
        if ($this->canUserManipulateAllProducts($user)) {
            return true;
        }

        return $user->hasPermission(Permission::update_own_products) && $product->seller->id === $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Product $product): bool
    {
        if ($this->canUserManipulateAllProducts($user)) {
            return true;
        }

        return $user->hasPermission(Permission::delete_own_products) && $product->seller->id === $user->id;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Product $product): bool
    {
        return $this->canUserManipulateAllProducts($user);
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Product $product): bool
    {
        return $this->restore($user, $product);
    }

    protected function canUserManipulateAllProducts(?User $user): bool
    {
        return (bool)$user?->hasPermission(Permission::manipulate_all_products);
    }
}
