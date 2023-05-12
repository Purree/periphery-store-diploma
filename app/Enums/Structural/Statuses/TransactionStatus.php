<?php

namespace App\Enums\Structural\Statuses;

use App\Enums\ArrayableEnumTrait;

enum TransactionStatus
{
    use ArrayableEnumTrait;

    /**
     * @after adding a new status here or
     * @after deleting a status from here,
     * run the following
     * @command php artisan db:seed --class=TransactionStatusSeeder
     */

    case new;
    case canceled;
    case failed;
    case pending;
    case declined;
    case rejected;
    case success;
}
