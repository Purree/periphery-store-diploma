<?php

namespace App\Observers;

use App\Enums\Structural\Statuses\OrderStatus as OrderStatusEnum;
use App\Helpers\EnumRelations\OrderTransactionStatusesRelation;
use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\Transaction;

class TransactionObserver
{
    public bool $afterCommit = true;

    /**
     * Handle the Transaction "updated" event.
     */
    // @TODO: Delete transaction on declined
    public function updated(Transaction $transaction): void
    {
        $oldTransaction = $transaction;
        $transaction = $transaction->fresh();

        $relatedOrderStatus = (new OrderTransactionStatusesRelation())->getFirstKeyOfValue($transaction->status->name);

        if (
            !$relatedOrderStatus ||
            !$oldTransaction->isDirty('status_id')
        ) {
            return;
        }

        Order::withoutEvents(static function () use ($transaction, $relatedOrderStatus) {
            $transaction->order()->update(
                [
                    'status_id' => OrderStatus::getIdFromEnum(
                        OrderStatusEnum::searchByName($relatedOrderStatus)
                    ),
                ]
            );
        });
    }

    /**
     * Handle the Transaction "deleted" event.
     */
    public function deleted(Transaction $transaction): void
    {
        //
    }
}
