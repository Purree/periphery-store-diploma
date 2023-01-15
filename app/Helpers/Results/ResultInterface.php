<?php

namespace App\Helpers\Results;

use Illuminate\Http\JsonResponse;

interface ResultInterface
{
    public static function success(mixed $returnValue = null): JsonResponse;

    public static function error(string|array $error): JsonResponse;
}
