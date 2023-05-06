<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Support\Facades\Gate;

class UserDataPolicy
{
    public function viewAny(User $user): bool
    {
        return Gate::allows('viewAny', $user);
    }

    public function view(User $user): bool
    {
        return Gate::allows('view', $user);
    }

    public function create(User $user): bool
    {
        return Gate::allows('create', $user);
    }

    public function update(User $user): bool
    {
        return Gate::allows('update', $user);
    }

    public function delete(User $user): bool
    {
        return Gate::allows('delete', $user);
    }

    public function restore(User $user): bool
    {
        return Gate::allows('restore', $user);
    }

    public function forceDelete(User $user): bool
    {
        return Gate::allows('forceDelete', $user);
    }
}
