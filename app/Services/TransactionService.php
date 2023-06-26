<?php

namespace App\Services;

use App\DataTransferObjects\TransactionDTO;
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
    public function getTransactionProviderData(Transaction $transaction): TransactionDTO
    {
        return $this->getTransactionProvider($transaction)->check();
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
            fn (): string => $this->getTransactionProvider($transaction)->create()
        );
    }

    public function destroy(Transaction $transaction)
    {
        $transactionProvider = $this->getTransactionProvider($transaction);
    }

    public function getTransactionFromOrder(Order $order): Transaction
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
