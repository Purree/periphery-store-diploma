<?php

namespace App\Http\Controllers;

use App\Exceptions\TransactionCreateException;
use App\Helpers\Results\ResponseResult;
use App\Http\Resources\TransactionDTOResource;
use App\Http\Resources\TransactionResource;
use App\Models\Order;
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
        $transactionData = $this->transactionService->show($order);

        return ResponseResult::success(TransactionDTOResource::make($transactionData));
    }

    /**
     * Update transaction provider data.
     */
    public function update(Order $order): JsonResponse
    {
        try {
            return ResponseResult::success(
                TransactionResource::make(
                    $this->transactionService->updateTransactionLink($order)
                )
            );
        } catch (TransactionCreateException $e) {
            return ResponseResult::error($e->getMessage(), Response::HTTP_BAD_GATEWAY);
        }
    }

    public function destroy(Order $order): JsonResponse
    {
        $this->transactionService->destroy($order);

        return ResponseResult::error();
    }
}
