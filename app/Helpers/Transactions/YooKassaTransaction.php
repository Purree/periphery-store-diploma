<?php

namespace App\Helpers\Transactions;

use App\DataTransferObjects\TransactionDTO;
use App\Enums\AvailableLanguage;
use App\Enums\Structural\Statuses\TransactionStatus;
use App\Exceptions\InvalidArgumentException;
use App\Exceptions\TransactionCheckException;
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
use YooKassa\Model\Payment\PaymentStatus;
use YooKassa\Model\Receipt\PaymentMode;
use YooKassa\Model\Receipt\PaymentSubject;

final class YooKassaTransaction implements TransactionInterface
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

        /** @psalm-suppress UndefinedMethod */
        $confirmationUrl = $response?->getConfirmation()?->getConfirmationUrl();

        return $confirmationUrl ?: throw new TransactionCreateException();
    }

    // @TODO: Поднять магазин на сервере
    // @TODO: Реализовать yookassa webhook's https://yookassa.ru/developers/using-api/webhooks?lang=php
    // @TODO: Отменять заказ при отмене оплаты
    // @TODO: Обновлять статус транзакции на pending, а, после подтверждения, на success
    // @TODO: Добавить автоматическое обновление статуса заказа после получения эвента
    /**
     * @throws TransactionCheckException
     */
    public function check(): TransactionDTO
    {
        try {
            $transactionUuid = $this->getOrderIdFromTransaction();

            $transactionData = $this->client->getPaymentInfo($transactionUuid);

            if ($transactionData === null) {
                throw new NotFoundException();
            }

            return new TransactionDTO(
                amount: (float)$transactionData->getAmount()?->getValue() ?: 0,
                status: $this->getTransactionStatusFromPaymentStatus($transactionData->getStatus()),
                createdAt: $transactionData->getCreatedAt(),
                isRefundable: $transactionData->getRefundable(),
                cancellationReason: $transactionData->getCancellationDetails()?->getReason(),
                refundedAmount: (float)$transactionData->getRefundedAmount()?->getValue(),
                expiresAt: $transactionData->getExpiresAt(),
                capturedAt: $transactionData->getCapturedAt(),
            );
        } catch (InvalidArgumentException $e) {
            throw new TransactionCheckException((string)__('errors.transactionDoesntExists'), previous: $e);
        } catch (\Exception $e) {
            throw new TransactionCheckException(previous: $e);
        }
    }

    public function destroy()
    {
        // TODO: Implement destroy() method.
    }

    /**
     * @throws InvalidArgumentException
     */
    private function getOrderIdFromTransaction(): string
    {
        if (!$this->transaction->link) {
            throw new InvalidArgumentException();
        }

        parse_str(parse_url($this->transaction->link)['query'], $transactionUrlQuery);

        return $transactionUrlQuery['orderId'];
    }

    /**
     * @throws InvalidArgumentException
     */
    private function getTransactionStatusFromPaymentStatus(?string $paymentStatus): TransactionStatus
    {
        return match ($paymentStatus) {
            PaymentStatus::CANCELED => TransactionStatus::canceled,
            PaymentStatus::PENDING => TransactionStatus::pending,
            PaymentStatus::SUCCEEDED => TransactionStatus::success,
            PaymentStatus::WAITING_FOR_CAPTURE => TransactionStatus::waitingForCapture,
            null => TransactionStatus::new,
            default => throw new InvalidArgumentException()
        };
    }
}
