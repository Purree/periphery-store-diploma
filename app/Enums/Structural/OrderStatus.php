<?php

namespace App\Enums\Structural;

use App\Enums\ArrayableEnumTrait;

enum OrderStatus
{
    use ArrayableEnumTrait;

    /**
     * @after adding a new status here or
     * @after deleting a status from here,
     * run the following
     * @command php artisan db:seed --class=OrderStatusSeeder
     * and add it into
     * @see /resources/js/helpers/enums/OrderStatusesEnum.js
     */

    case new;
    case checkout;
    case paid;
    case failed;
    case shipped;
    case delivered;
    case returned;
    case completed;
}
