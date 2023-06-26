<?php

namespace App\Helpers\Transactions;

use App\DataTransferObjects\TransactionDTO;
use App\Exceptions\TransactionCheckException;
use App\Exceptions\TransactionCreateException;
use App\Exceptions\TransactionRefundException;
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

    /**
     * Get data of transaction by provider
     *
     * @throws TransactionCheckException
     *
     * @return TransactionDTO
     */
    public function check(): TransactionDTO;

    /**
     * Run the refund process to customer
     *
     * @param  string|null  $reason
     * @return void
     * @throws TransactionRefundException
     */
    public function refund(string $reason = null): void;
}
