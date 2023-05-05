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
use Illuminate\Support\Facades\Auth;

class CartItemController extends Controller
{
    public function __construct(private readonly CartService $cartService, private CartItemService $cartItemService)
    {
    }

    public function update(ManipulateCartItemsRequest $request, Product $product): JsonResponse
    {
        $addToCartProductsQuantity = $request->validated('quantity');
        if ($addToCartProductsQuantity <= 0) {
            return $this->destroy($product);
        }

        $user = $request->user();
        $activeCart = $user->activeCart()->first();

        if (!$activeCart?->exists()) {
            $activeCart = $this->cartService->store($user);
        }

        try {
            $cartItem = $this->cartItemService->update($activeCart, $product, $addToCartProductsQuantity);

            return ResponseResult::success(CartItemResource::make($cartItem));
        } catch (TooManyQuantitiesException|ProductNotAvailableForPurchaseException $e) {
            return ResponseResult::error(['product' => $e->getMessage()], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function destroy(Product $product): JsonResponse
    {
        $activeCart = Auth::user()->activeCart()->first();
        if (!$activeCart?->exists()) {
            return ResponseResult::error(
                ['cart' => __('errors.cartDoesntExists')],
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }

        $cartProduct = $activeCart->items->firstWhere('product_id', $product->id);
        if ($cartProduct === null) {
            return ResponseResult::error(
                ['product' => __('errors.cartDoesntContainProduct')],
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }

        $this->cartItemService->destroy($activeCart, $product);

        return ResponseResult::success();
    }
}
