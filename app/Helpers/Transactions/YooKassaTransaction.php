<?php

namespace App\Helpers\Transactions;

use App\Enums\AvailableLanguage;
use App\Exceptions\TransactionCreateException;
use App\Models\Transaction;
use Illuminate\Support\Facades\App;
use YooKassa\Client;
use YooKassa\Common\Exceptions\ApiConnectionException;
use YooKassa\Common\Exceptions\ApiException;
use YooKassa\Common\Exceptions\AuthorizeException;
use YooKassa\Common\Exceptions\BadApiRequestException;
use YooKassa\Common\Exceptions\ExtensionNotFoundException;
use YooKassa\Common\Exceptions\ForbiddenException;
use YooKassa\Common\Exceptions\InternalServerError;
use YooKassa\Common\Exceptions\NotFoundException;
use YooKassa\Common\Exceptions\ResponseProcessingException;
use YooKassa\Common\Exceptions\TooManyRequestsException;
use YooKassa\Common\Exceptions\UnauthorizedException;
use YooKassa\Helpers\ProductCode;
use YooKassa\Model\Receipt\PaymentMode;
use YooKassa\Model\Receipt\PaymentSubject;

class YooKassaTransaction implements TransactionInterface
{
    private readonly Client $client;

    public function __construct(private readonly Transaction $transaction)
    {
        $this->client = (new Client())->setAuth(
            config('transaction.yookassa.shop_id'),
            config('transaction.yookassa.secret')
        );
    }

    public function create(): string
    {
        $order = $this->transaction->order()->with(
            ['items', 'items.product', 'items.product.seller', 'address', 'mobile', 'name']
        )->first();
        $orderItems = $order->items;
        $receiptItems = [];
        $locale = (AvailableLanguage::getFullLocaleFromAbbreviated(App::getLocale()))->value;

        foreach ($orderItems as $orderItem) {
            $product = $orderItem->product;
            $supplier = $product->seller;
            $receiptItems[] = [
                'description' => $product->title,
                'quantity' => $orderItem->quantity,
                'amount' => [
                    'value' => $orderItem->price_with_discount,
                    'currency' => 'RUB',
                ],
                'vat_code' => '4',
                'payment_mode' => PaymentMode::FULL_PAYMENT,
                'payment_subject' => PaymentSubject::COMMODITY,

                'product_code' => (string)(new ProductCode($orderItem->sku)),
                'supplier' => [
                    'name' => $supplier->name,
                    'email' => $supplier->email,
                ],
            ];
        }

        try {
            $response = $this->client->createPayment(
                [
                    'amount' => [
                        'value' => $order->totalCost,
                        'currency' => 'RUB',
                    ],
                    'confirmation' => [
                        'type' => 'redirect',
                        'locale' => $locale,
                        'return_url' => route('transaction.confirm', ['order' => $order->id]),
                    ],
                    'capture' => true,
                    'description' => 'Заказ №'.$order->id,
                    'metadata' => [
                        'transactionId' => $this->transaction->id,
                    ],
                    'receipt' => [
                        'customer' => [
                            'full_name' => $order->name->full_name,
                            'email' => $order->user->email,
                            'phone' => $order->mobile->mobile,
                            'address' => $order->address->address,
                        ],
                        'items' => $receiptItems,
                    ],
                ],
                $order->token
            );
        } catch (
            ApiConnectionException|AuthorizeException|BadApiRequestException|ForbiddenException
            |InternalServerError|NotFoundException|ResponseProcessingException|TooManyRequestsException
            |UnauthorizedException|ApiException|ExtensionNotFoundException $e
        ) {
            throw new TransactionCreateException(previous: $e);
        }

        $confirmationUrl = $response?->getConfirmation()?->getConfirmationUrl();

        return $confirmationUrl ?: throw new TransactionCreateException();
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
