<?php

namespace App\Observers;

use App\Models\Order;
use App\Models\Transaction;
use App\Models\TransactionStatus;
use App\Enums\Structural\Statuses\TransactionStatus as TransactionStatusEnum;

class OrderObserver
{
    public function created(Order $order): void
    {
        Transaction::query()->create([
            'user_id' => $order->user_id,
            'order_id' => $order->id,
            'status_id' => TransactionStatus::getIdFromEnum(TransactionStatusEnum::new)
        ]);
    }
}
