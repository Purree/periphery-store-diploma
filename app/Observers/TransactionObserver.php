<?php

namespace App\Observers;

use App\Enums\Structural\Statuses\OrderStatus as OrderStatusEnum;
use App\Enums\Structural\Statuses\TransactionStatus as TransactionStatusEnum;
use App\Exceptions\TransactionRefundException;
use App\Helpers\EnumRelations\OrderTransactionStatusesRelation;
use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\Transaction;
use App\Models\TransactionStatus;

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
        $transactionStatus = $transaction->status->name;
        $relatedOrderStatus = (new OrderTransactionStatusesRelation())->getFirstKeyOfValue($transactionStatus);

        if (
            !$relatedOrderStatus ||
            !$oldTransaction->isDirty('status_id')
        ) {
            return;
        }

        if (
            $transactionStatus === TransactionStatusEnum::declined->name &&
            !$transaction->{$transaction->getDeletedAtColumn()} // "Deleted at" column doesn't fill
        ) {
            $transaction->delete();
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
     * @throws TransactionRefundException
     */
    public function deleted(Transaction $transaction): void
    {
        if (!$transaction->link) {
            return;
        }

        $transaction->getProvider()->refund();

        $transaction->update(['status_id' => TransactionStatus::getIdFromEnum(TransactionStatusEnum::declined)]);
    }
}
