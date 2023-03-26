<?php

namespace App\Policies;

use App\Enums\Permission;
use App\Models\User;

class UserPolicy
{
    /**
     * Perform pre-authorization checks.
     */
    public function before(User $user, string $ability): bool|null
    {
        if ($ability === 'viewAdditionalResourceData') {
            return null;
        }

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
        return $user->isAdministrator();
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, User $model): bool
    {
        return $model->id === $user->id;
    }

    /**
     * Determine whether the user can view additional information in api resource its need to avoid n+1 problem.
     * Additionally, add check for viewAdditionalResourceData ability to before method and return null if it's true.
     */
    public function viewAdditionalResourceData(User $user, User $model): bool
    {
        return $model->id === $user->id;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->isAdministrator();
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, User $model): bool
    {
        return $model->id === $user->id && $user->hasPermission(Permission::change_own_data);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, User $model): bool
    {
        return $this->update($user, $model);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, User $model): bool
    {
        return $this->delete($user, $model);
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, User $model): bool
    {
        return $user->isAdministrator();
    }
}
