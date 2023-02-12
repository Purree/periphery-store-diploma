<?php

namespace App\Enums;

trait ArrayableEnumTrait
{
    public static function getAllNames(): array
    {
        return array_column(self::cases(), 'name');
    }

    public static function getAllValues(): array
    {
        return array_column(self::cases(), 'value');
    }

    public static function toArray(): array
    {
        $values = self::getAllValues();
        $keys = self::getAllNames();

        return $values ? array_combine($keys, $values) : $keys;
    }
}
