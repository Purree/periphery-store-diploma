<?php

namespace App\Http\Controllers;

use App\Exceptions\ProductNotAvailableForPurchaseException;
use App\Exceptions\TooManyQuantitiesException;
use App\Helpers\Results\ResponseResult;
use App\Http\Requests\ManipulateCartItemsRequest;
use App\Http\Resources\CartItemResource;
use App\Models\Product;
use App\Services\CartItemService;
use App\Services\CartService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class CartItemController extends Controller
{
    public function __construct(private readonly CartService $cartService, private CartItemService $cartItemService)
    {
    }

    public function addToCart(ManipulateCartItemsRequest $request, Product $product): JsonResponse
    {
        $user = $request->user();
        $activeCart = $user->activeCart()->first();

        if (!$activeCart?->exists()) {
            $activeCart = $this->cartService->store($user);
        }

        $addToCartProductsQuantity = $request->validated('quantity') ?? 1;
        try {
            $cartItem = $this->cartItemService->addToCart($activeCart, $product, $addToCartProductsQuantity);

            return ResponseResult::success(CartItemResource::make($cartItem));
        } catch (TooManyQuantitiesException|ProductNotAvailableForPurchaseException $e) {
            return ResponseResult::error($e->getMessage(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function deleteFromCart(ManipulateCartItemsRequest $request, Product $product)
    {
        //
    }
}
