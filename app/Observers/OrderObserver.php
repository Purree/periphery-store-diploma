<?php

namespace App\Observers;

use App\Helpers\EnumRelations\OrderTransactionStatusesRelation;
use App\Models\Order;
use App\Models\Transaction;
use App\Models\TransactionStatus;
use App\Enums\Structural\Statuses\TransactionStatus as TransactionStatusEnum;

final class OrderObserver
{
    public function created(Order $order): void
    {
        Transaction::createTransactionFromOrder($order);
    }

    public function updated(Order $order): void
    {
        // checkout and returned order statuses aren't related to any transaction status
        $statusesRelation = (new OrderTransactionStatusesRelation())->getRelations();

        if (
            !isset($statusesRelation[$order->status->name]) ||
            !$order->isDirty('status_id') ||
            !$this->checkIsOrderTransactionExistsAndNew($order)
        ) {
            return;
        }

        $order->transaction()->update(
            [
                'status_id' => TransactionStatus::getIdFromEnum(
                    TransactionStatusEnum::searchByName($statusesRelation[$order->status->name][0])
                ),
            ]
        );
    }

    public function deleted(Order $order): void
    {
        if (!$this->checkIsOrderTransactionExistsAndNew($order)) {
            return;
        }

        $order->transaction()->update(['status_id', TransactionStatus::getIdFromEnum(TransactionStatusEnum::rejected)]);
    }

    private function checkIsOrderTransactionExistsAndNew(Order $order): bool
    {
        /** @psalm-suppress TypeDoesNotContainType */
        return isset($order->transaction) || $order->transaction?->status->name === TransactionStatusEnum::new->name;
    }
}
