<?php

namespace App\Services;

use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Carbon;

class SalesHitsService
{
    public function getSalesHits(): Collection
    {
        $createdNotLaterThenDate = Carbon::now()->subMonths();

        return Product::query()
            ->withCount(
                [
                    'reviews',
                    'orderItems' => fn (Builder $builder) => $builder->whereDate(
                        'created_at',
                        '>',
                        $createdNotLaterThenDate
                    ),
                ]
            )
            ->withAvg('reviews', 'rating')
            ->inStock()
            ->isAvailable()
            ->orderBy('order_items_count', 'desc')
            ->limit(6)
            ->get();
    }
}
