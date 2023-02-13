<?php

namespace App\Enums;

enum AvailableLanguage: string implements ArrayableEnumInterface
{
    use ArrayableEnumTrait;

    case English = 'en';
    case Russian = 'ru';
}
