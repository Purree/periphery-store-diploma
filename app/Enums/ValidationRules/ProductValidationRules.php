<?php

namespace App\Enums\ValidationRules;

use App\Rules\NotApng;

enum ProductValidationRules: string
{
    case title = 'string|max:255';
    case metaTitle = 'string|max:128';
    case description = 'string';
    case price = 'numeric|min:0|max:9999999';
    case discount = 'int|min:0|max:100';
    case quantity = 'int|min:0';
    case isAvailable = 'nullable|bool';

    public static function getPreviewImageValidationRule(): array
    {
        return ['nullable', 'image', 'mimes:png,jpeg,jpg', 'max:2048', new NotApng()];
    }
}
