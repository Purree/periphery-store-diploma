<?php

namespace App\Http\Controllers;

use App\Exceptions\TransactionCheckException;
use App\Exceptions\TransactionCreateException;
use App\Exceptions\TransactionRefundException;
use App\Helpers\Results\ResponseResult;
use App\Http\Resources\TransactionDTOResource;
use App\Http\Resources\TransactionResource;
use App\Models\Order;
use App\Enums\Structural\Statuses\TransactionStatus as TransactionStatusEnum;
use App\Models\TransactionStatus;
use App\Services\TransactionService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class TransactionController extends Controller
{
    public function __construct(private readonly TransactionService $transactionService)
    {
    }

    public function show(Order $order): JsonResponse
    {
        $transaction = $this->transactionService->getTransactionFromOrder($order);

        try {
            $transactionData = $this->transactionService->getTransactionProviderData($transaction);
        } catch (TransactionCheckException $exception) {
            return ResponseResult::error($exception->getMessage(), Response::HTTP_BAD_GATEWAY);
        }


        if ($transaction->status->name !== $transactionData->status->name) {
            $transaction->update(['status_id' => TransactionStatus::getIdFromEnum($transactionData->status)]);
        }

        return ResponseResult::success(TransactionDTOResource::make($transactionData));
    }

    /**
     * Update transaction provider data.
     */
    public function update(Order $order): JsonResponse
    {
        $transaction = $this->transactionService->getTransactionFromOrder($order);

        try {
            $transaction->update([
                'link' => $this->transactionService->getTransactionLink($transaction),
                'status_id' => TransactionStatus::getIdFromEnum(TransactionStatusEnum::pending),
            ]);
        } catch (TransactionCreateException $e) {
            return ResponseResult::error($e->getMessage(), Response::HTTP_BAD_GATEWAY);
        }
        return ResponseResult::success(
            TransactionResource::make($transaction->fresh())
        );
    }

    public function destroy(Order $order): JsonResponse
    {
        $transaction = $this->transactionService->getTransactionFromOrder($order);
        try {
            $this->transactionService->destroy($transaction);
        } catch (TransactionRefundException $e) {
            return ResponseResult::error($e->getMessage(), Response::HTTP_BAD_GATEWAY);
        }

        return ResponseResult::success();
    }
}
