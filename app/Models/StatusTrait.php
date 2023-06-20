<?php

namespace App\Models;

use UnitEnum;

trait StatusTrait
{
    public static function getIdFromEnum(UnitEnum $status): int
    {
        return self::query()->where('name', $status->name)->first()->id;
    }
}
