<?php

namespace App\Enums;

interface ArrayableEnumInterface
{
    public static function getAllNames(): array;
    public static function getAllValues(): array;
    public static function toArray(): array;
}
