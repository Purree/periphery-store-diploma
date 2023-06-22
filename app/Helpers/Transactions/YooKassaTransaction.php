<?php

namespace App\Helpers\Transactions;

use YooKassa\Client;

class YooKassaTransaction implements TransactionInterface
{
    private Client $client;

    public function __construct()
    {
        $this->client = new Client();
        $this->client = $this->client->setAuth(
            config('transaction.yookassa.shop_id'),
            config('transaction.yookassa.secret')
        );
    }

    public function create()
    {
        // TODO: Implement create() method.
    }

    // @TODO: Поднять магазин на сервере
    // @TODO: Реализовать yookassa webhook's https://yookassa.ru/developers/using-api/webhooks?lang=php
    // @TODO: Отменять заказ при отмене оплаты
    // @TODO: Обновлять статус транзакции на pending, а, после подтверждения, на success
    // @TODO: Добавить автоматическое обновление статуса заказа после получения эвента
    public function check()
    {
        // TODO: Implement check() method.
    }

    public function destroy()
    {
        // TODO: Implement destroy() method.
    }
}
