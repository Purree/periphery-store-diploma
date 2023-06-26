<?php

namespace App\Services;

use App\DataTransferObjects\TransactionDTO;
use App\Enums\CacheKeyEnum;
use App\Enums\Structural\Statuses\TransactionStatus;
use App\Exceptions\TransactionCheckException;
use App\Exceptions\TransactionCreateException;
use App\Exceptions\TransactionRefundException;
use App\Models\Order;
use App\Models\Transaction;
use Illuminate\Support\Facades\Cache;

class TransactionService
{
    /**
     * @throws TransactionCheckException
     */
    public function getTransactionProviderData(Transaction $transaction): TransactionDTO
    {
        return $transaction->getProvider()->check();
    }

    /**
     * @throws TransactionCreateException
     */
    public function getTransactionLink(Transaction $transaction): string
    {
        if ($transaction->status->name !== TransactionStatus::new->name) {
            throw new TransactionCreateException(__('errors.incorrectTransactionStatus'));
        }


        return Cache::remember(
            CacheKeyEnum::transactionLink->value.$transaction->id,
            600,
            fn (): string => $transaction->getProvider()->create()
        );
    }

    /**
     * @throws TransactionRefundException
     */
    public function destroy(Transaction $transaction): void
    {
        if ($transaction->status->name !== TransactionStatus::success->name) {
            throw new TransactionRefundException();
        }

        $transaction->delete();
    }

    public function getTransactionFromOrder(Order $order): Transaction
    {
        return $order->transaction ?: Transaction::createTransactionFromOrder($order);
    }
}
