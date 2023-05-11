<?php

namespace App\Http\Requests;

use Illuminate\Support\Str;

trait SnakedRequestKeysTrait
{
    public function validated($key = null, $default = null): array
    {
        return collect(parent::validated($key, $default))->keyBy(
            fn ($value, $key) => Str::snake($key)
        )->toArray();
    }
}
