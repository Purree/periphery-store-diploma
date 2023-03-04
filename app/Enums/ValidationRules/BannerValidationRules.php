<?php

namespace App\Enums\ValidationRules;

enum BannerValidationRules: string
{
    case name = 'unique:banners|max:255';
    case url = 'string|url|max:255';
    case image = 'image|max:2048';
}
