<?php

namespace App\Helpers;

use App\Scopes\TotalPriceScope;

trait TotalPriceTrait
{
    public static function bootTotalPriceTrait(): void
    {
        static::addGlobalScope(new TotalPriceScope());
    }

    public function initializeTotalPriceTrait(): void
    {
        if (!isset($this->casts[self::getTotalPriceColumnName()])) {
            $this->casts[self::getTotalPriceColumnName()] = 'float';
        }
    }

    public static function getTotalPriceColumnName(): string
    {
        return defined(
            static::class.'::TOTAL_PRICE_COLUMN_NAME'
        ) ? static::TOTAL_PRICE_COLUMN_NAME : 'total_price';
    }
}
