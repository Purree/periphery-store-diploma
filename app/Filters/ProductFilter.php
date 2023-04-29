<?php

namespace App\Filters;

use App\Models\Category;
use Illuminate\Database\Eloquent\Builder;

class ProductFilter extends QueryFilter
{
    public function categories(string $slug): Builder
    {
        $slugs = $this->explodeParameters($slug);
        $categoryIds = Category::query()->whereIn('slug', $slugs)->pluck('id');

        return $this->builder->whereHas(
            'categories',
            fn (Builder $query) => $query->whereIn('category_id', $categoryIds)
        );
    }

    public function searchBy($searchedString): Builder
    {
        return $this->builder
            ->where('title', 'LIKE', '%'.$searchedString.'%')
            ->orWhere('description', 'LIKE', '%'.$searchedString.'%');
    }
}
