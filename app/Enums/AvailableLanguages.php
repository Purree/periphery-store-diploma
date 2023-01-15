<?php

namespace App\Enums;

enum AvailableLanguages: string
{
    case English = 'en';
    case Russian = 'ru';

    public static function getAllKeys(): array
    {
        return array_column(self::cases(), 'name');
    }

    public static function getAllValues(): array
    {
        return array_column(self::cases(), 'value');
    }

    public static function toArray(): array
    {
        return array_combine(self::getAllKeys(), self::getAllValues());
    }
}
