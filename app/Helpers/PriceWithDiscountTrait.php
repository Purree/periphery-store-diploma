<?php

namespace App\Helpers;

use App\Scopes\PriceWithDiscountScope;

trait PriceWithDiscountTrait
{
    public static function bootPriceWithDiscountTrait(): void
    {
        static::addGlobalScope(new PriceWithDiscountScope());
    }

    public function initializePriceWithDiscountTrait(): void
    {
        if (!isset($this->casts[self::getPriceWithDiscountColumnName()])) {
            $this->casts[self::getPriceWithDiscountColumnName()] = 'float';
        }
    }

    public static function getPriceWithDiscountColumnName(): string
    {
        return defined(
            static::class.'::DISCOUNTED_PRICE_COLUMN_NAME'
        ) ? static::DISCOUNTED_PRICE_COLUMN_NAME : 'price_with_discount';
    }
}
