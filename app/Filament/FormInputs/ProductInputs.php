<?php

namespace App\Filament\FormInputs;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TextInput\Mask;

class ProductInputs
{
    public static function getPriceInput(): TextInput
    {
        return TextInput::make('price')
            ->numeric()
            ->mask(
                fn (Mask $mask) => $mask
                    ->numeric()
                    ->decimalPlaces(2)
                    ->decimalSeparator(',')
                    ->mapToDecimalSeparator([','])
                    ->minValue(0)
                    ->maxValue(9999999.99)
                    ->normalizeZeros()
                    ->padFractionalZeros()
                    ->thousandsSeparator(' '),
            )
            ->required();
    }

    public static function getDiscountInput(): TextInput
    {
        return TextInput::make('discount')
            ->numeric()
            ->minValue(0)
            ->maxValue(100)
            ->integer()
            ->required();
    }

    public static function getQuantityInput(): TextInput
    {
        return TextInput::make('quantity')
            ->numeric()
            ->minValue(0)
            ->integer()
            ->required();
    }
}
