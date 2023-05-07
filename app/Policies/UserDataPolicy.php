<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Gate;

class UserDataPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return Gate::allows('viewAny', $user);
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Model $userDataModal): bool
    {
        return $this->create($userDataModal->user);
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return Gate::allows('update', $user);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Model $userDataModal): bool
    {
        return $this->create($userDataModal->user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Model $userDataModal): bool
    {
        return $this->create($userDataModal->user);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Model $userDataModal): bool
    {
        return $this->create($userDataModal->user);
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Model $userDataModal): bool
    {
        return Gate::allows('forceDelete', $userDataModal->user);
    }
}
