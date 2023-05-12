<?php

namespace App\Exceptions;

use Exception;
use Throwable;

class ProductNotAvailableForPurchaseException extends Exception
{
    public function __construct(string $message = "", int $code = 0, ?Throwable $previous = null)
    {
        parent::__construct($message ?: (string)__("errors.productNotAvailableForPurchase"), $code, $previous);
    }
}
