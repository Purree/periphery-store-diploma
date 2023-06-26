<?php

namespace App\Enums\Structural\Statuses;

use App\Enums\ArrayableEnumTrait;
use App\Enums\SearchableEnumTrait;

enum TransactionStatus
{
    use ArrayableEnumTrait;
    use SearchableEnumTrait;

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
    case waitingForCapture;
    case declined; // Canceled because transaction was deleted or user manually refund money
    case rejected; // Canceled because order was deleted
    case success;
}
