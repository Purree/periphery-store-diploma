<?php

namespace Database\Factories;

use App\Enums\Role;
use App\Models\Product;
use App\Models\Review;
use App\Models\ReviewReply;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

/** @psalm-suppress NullableReturnStatement */
class ModelInstanceFactory
{
    public function createProduct(): Product
    {
        return Product::query()->inRandomOrder()->first() ?? Product::factory(1)->create()->first();
    }

    public function createUser(): User
    {
        /** @psalm-suppress UndefinedMagicMethod */
        return User::query()->inRandomOrder()->first() ?? User::factory(1)->associateWithRoles()->create()->first();
    }

    public function createReview(): Review
    {
        return Review::query()->inRandomOrder()->first() ?? Review::factory(1)->create()->first();
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
}
