<?php

namespace App\Filters;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;

class ProductFilter extends QueryFilter
{
    public function searchBy($searchedString): Builder
    {
        $foundProducts = Product::search($searchedString)->get()->pluck('id');

        return $this->builder->whereIn('id', $foundProducts);
    }

    public function categories(string $slug): Builder
    {
        $slugs = $this->explodeParameters($slug);
        $categoryIds = Category::query()->whereIn('slug', $slugs)->pluck('id');

        return $this->builder->whereHas(
            'categories',
            fn (Builder $query) => $query->whereIn('category_id', $categoryIds)
        );
    }

    public function sellers(string $ids): Builder
    {
        $sellerIds = $this->explodeParameters($ids);

        return $this->builder->whereHas(
            'seller',
            fn (Builder $query) => $query->whereIn('seller_id', $sellerIds)
        );
    }

    public function hasReviews(): Builder
    {
        return $this->builder->whereHas(
            'reviews',
            fn (Builder $query) => $query->where(fn (Builder $query) => $query->count() > 0)
        );
    }

    public function priceBetween(string|array $costs): Builder
    {
        $priceDiapason = is_string($costs) ? $this->explodeParameters($costs) : $costs;

        asort($priceDiapason);

        return $this->builder->havingBetween(Product::getPriceWithDiscountColumnName(), $priceDiapason);
    }
}
