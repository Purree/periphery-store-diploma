<?php

namespace Database\Factories;

use App\Enums\Structural\Role;
use App\Models\Review;
use App\Models\ReviewReply;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

/** @psalm-suppress NullableReturnStatement */
class ModelInstanceFactory
{
    public function createUser(): User
    {
        /** @psalm-suppress UndefinedMagicMethod */
        return User::query()->inRandomOrder()->first() ?? User::factory(1)->associateWithRoles()->create()->first();
    }

    public function createReviewReply(?Review $review = null): ReviewReply
    {
        $reviewReply = ReviewReply::query()
            ->when(
                $review !== null,
                static fn (Builder $builder) => $builder->where('id', $review->id)
            )
            ->inRandomOrder()->first();

        if (!$reviewReply) {
            $reviewReply = ReviewReply::factory(1)
                ->state($review !== null ? ['review_id' => $review->id] : [])
                ->create()
                ->first();
        }

        return $reviewReply;
    }

    public function createSeller(): User
    {
        $seller = User::query()->whereHas(
            'roles',
            static fn ($query) => $query->where('name', Role::seller->name)
        )->inRandomOrder()->first();

        if (empty($seller)) {
            /** @psalm-suppress UndefinedMagicMethod */
            $seller = User::factory(1)
                ->associateWithRoles(
                    Role::seller
                )->create()->first();
        }

        return $seller;
    }

    public function __call(string $name, array $arguments)
    {

        $methodStartString = 'create';
        if (!str_starts_with($name, $methodStartString)) {
            throw new \BadMethodCallException('Cannot call this method');
        }

        $modelName = 'App\\Models\\'.mb_substr($name, mb_strlen($methodStartString));

        return $modelName::query()->inRandomOrder()->first() ?? $modelName::factory(1)->create()->first();
    }
}
