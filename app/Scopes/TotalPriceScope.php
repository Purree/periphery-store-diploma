<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class TotalPriceScope implements Scope
{
    public function apply(Builder $builder, Model $model): Builder
    {
        if ($builder->getQuery()->columns === null) {
            $builder->select($model->qualifyColumn('*'));
        }

        $priceColumnName = method_exists($model, 'getPriceWithDiscountColumnName') ?
            '@'.$model::getPriceWithDiscountColumnName() :
            'price';
        $totalPriceColumnName = $model::getTotalPriceColumnName();

        return $builder->selectRaw(
            '@'.$totalPriceColumnName.' := '.$priceColumnName.' * quantity as '.$totalPriceColumnName
        );
    }
}
