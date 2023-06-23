<?php

namespace App\Enums;

trait SearchableEnumTrait
{
    public static function searchByName(string $name): self
    {
        return constant("self::$name");
    }
}
