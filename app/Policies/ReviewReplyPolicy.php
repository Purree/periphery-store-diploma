<?php

namespace App\Policies;

use App\Models\ReviewReply;
use App\Models\User;

class ReviewReplyPolicy
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
    public function viewAny(?User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(?User $user, ReviewReply $reviewReply): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, ReviewReply $reviewReply): bool
    {
        return $reviewReply->replier->id === $user->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, ReviewReply $reviewReply): bool
    {
        return $this->update($user, $reviewReply);
    }
}
