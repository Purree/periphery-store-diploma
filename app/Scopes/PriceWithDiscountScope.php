<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

final class PriceWithDiscountScope implements Scope
{
    public function apply(Builder $builder, Model $model): Builder
    {
        if ($builder->getQuery()->columns === null) {
            $builder->select($model->qualifyColumn('*'));
        }

        return $builder->selectRaw(
            'round(price - (price * (discount / 100)), 2) as '.$model::getPriceWithDiscountColumnName()
        );
    }
}
