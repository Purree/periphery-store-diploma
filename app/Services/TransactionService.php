<?php

namespace App\Services;

use App\Enums\CacheKeyEnum;
use App\Enums\Structural\Statuses\TransactionStatus;
use App\Exceptions\TransactionCreateException;
use App\Helpers\Transactions\TransactionInterface;
use App\Models\Order;
use App\Models\Transaction;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;

class TransactionService
{
    public function show(Order $order)
    {
        $transaction = $this->getTransaction($order);
        $transactionProvider = $this->getTransactionProvider($transaction);
    }

    /**
     * @throws TransactionCreateException
     */
    public function updateTransactionLink(Order $order): Transaction
    {
        $transaction = $this->getTransaction($order);

        if ($transaction->status->name !== TransactionStatus::new->name) {
            throw new TransactionCreateException(__('errors.incorrectTransactionStatus'));
        }

        $transactionLink = Cache::remember(
            CacheKeyEnum::transactionLink->value.$transaction->id,
            600,
            fn (): string => $this->getTransactionProvider($transaction)->create()
        );

        $transaction->update(['link' => $transactionLink]);

        return $transaction;
    }

    public function destroy(Order $order)
    {
        $transaction = $this->getTransaction($order);
        $transactionProvider = $this->getTransactionProvider($transaction);
    }

    private function getTransaction(Order $order): Transaction
    {
        return $order->transaction ?: Transaction::createTransactionFromOrder($order);
    }

    private function getTransactionProvider(Transaction $transaction): TransactionInterface
    {
        return App::make(
            \App\Helpers\Transactions\TransactionInterface::class,
            ['transaction' => $transaction]
        );
    }
}
