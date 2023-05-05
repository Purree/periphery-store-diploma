<?php

namespace App\Enums\Structural;

use App\Enums\ArrayableEnumTrait;

enum CartStatus
{
    use ArrayableEnumTrait;

    /**
     * @after adding a new status here or
     * @after deleting a status from here,
     * run the following
     * @command php artisan db:seed --class=CartStatusSeeder
     */

    case new;
    case checkout;
    case paid;
    case completed;
    case abandoned;
}
