<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\UserAddress;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        return ResponseResult::success(
            OrderResource::collection(
                Order::query()
                    ->where('user_id', $request->user()->id)
                    ->with(['status', 'items', 'items.product'])
                    ->get()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        // @TODO: Implement method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);
    }

    /**
     * Display the specified resource.
     */
    public function show(UserAddress $userAddress): JsonResponse
    {
        // @TODO: Implement method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserAddress $userAddress): JsonResponse
    {
        // @TODO: Implement method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserAddress $userAddress): JsonResponse
    {
        // @TODO: Implement method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);
    }
}
