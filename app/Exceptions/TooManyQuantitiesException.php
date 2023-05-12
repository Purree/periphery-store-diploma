<?php

namespace App\Exceptions;

use Exception;
use Throwable;

class TooManyQuantitiesException extends Exception
{
    public function __construct(string $message = "", int $code = 0, ?Throwable $previous = null)
    {
        parent::__construct((string)__("errors.tooManyQuantities", ['product' => $message]), $code, $previous);
    }
}
