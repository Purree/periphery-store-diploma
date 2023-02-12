<?php

namespace App\Enums;

enum AvailableLanguage: string
{
    use ArrayableEnumTrait;

    case English = 'en';
    case Russian = 'ru';
}
