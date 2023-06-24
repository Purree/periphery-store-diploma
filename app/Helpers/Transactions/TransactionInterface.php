<?php

namespace App\Helpers\Transactions;

use App\Exceptions\TransactionCreateException;
use App\Models\Transaction;

interface TransactionInterface
{
    public function __construct(Transaction $transaction);

    /**
     * Create transaction using transaction provider service and get link for latest redirect.
     *
     * @throws TransactionCreateException
     *
     * @return string
     */
    public function create(): string;

    public function check();

    public function destroy();
}
