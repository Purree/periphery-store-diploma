<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Support\Facades\Log;
use Throwable;

class TransactionRefundException extends Exception
{
    public function __construct(string $message = "", int $code = 0, ?Throwable $previous = null)
    {
        $message = $message ?: (string)__("errors.transactionRefundFailed");

        Log::critical($message, [$previous]);

        parent::__construct($message, $code, $previous);
    }
}
