<?php

namespace App\Helpers\EnumRelations;

use App\Enums\Structural\Statuses\OrderStatus;
use App\Enums\Structural\Statuses\TransactionStatus;

class OrderTransactionStatusesRelation extends AbstractEnumRelation
{
    public function __construct()
    {
        /**
         * @after editing that relations, run the following
         * @command php artisan db:seed --class=RolePermissionSeeder
         */
        $this->createRelation(
            OrderStatus::new,
            TransactionStatus::new,
        );
        $this->createRelation(
            OrderStatus::checkout,
            TransactionStatus::pending,
            TransactionStatus::waitingForCapture,
        );
        $this->createRelation(
            OrderStatus::returned,
            TransactionStatus::declined,
        );
        $this->createRelation(
            OrderStatus::paid,
            TransactionStatus::success,
        );
        $this->createRelation(
            OrderStatus::failed,
            TransactionStatus::failed,
            TransactionStatus::canceled,
            TransactionStatus::rejected
        );
        $this->createRelation(
            OrderStatus::shipped,
            TransactionStatus::success,
        );
        $this->createRelation(
            OrderStatus::delivered,
            TransactionStatus::success,
        );
        $this->createRelation(
            OrderStatus::completed,
            TransactionStatus::success,
        );
    }
}
