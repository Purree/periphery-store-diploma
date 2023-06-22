<?php

namespace App\Helpers\Transactions;

interface TransactionInterface
{
    public function create();

    public function check();

    public function destroy();
}
