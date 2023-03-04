<?php

namespace App\Policies;

use App\Enums\Permission;
use App\Models\Banner;
use App\Models\User;

class BannerPolicy
{
    /**
     * Perform pre-authorization checks.
     */
    public function before(User $user, string $ability): bool|null
    {
        if ($user->isAdministrator()) {
            return true;
        }

        return null;
    }

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->hasPermission(Permission::manipulate_banners);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Banner $banner): bool
    {
        return $user->hasPermission(Permission::manipulate_banners);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Banner $banner): bool
    {
        return $user->hasPermission(Permission::manipulate_banners);
    }
}
