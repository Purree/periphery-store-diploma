<?php

namespace App\Http\Controllers;

use App\Enums\CartManipulateMode;
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

    public function manipulateCartProduct(ManipulateCartItemsRequest $request, Product $product): JsonResponse
    {
        $manipulationMode = $request->validated('mode') ?? CartManipulateMode::increase->name;
        if ($manipulationMode === CartManipulateMode::increase->name) {
            return $this->addToCart($request, $product);
        }

        return $this->decreaseCartProductQuantity($request, $product);
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
            return ResponseResult::error(['product' => $e->getMessage()], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function deleteFromCart(ManipulateCartItemsRequest $request, Product $product): JsonResponse
    {
        return $this->decreaseCartProductQuantity($request, $product);
    }

    public function decreaseCartProductQuantity(ManipulateCartItemsRequest $request, Product $product): JsonResponse
    {
        $activeCart = $request->user()->activeCart()->first();
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

        $quantityOfProductsToDelete = $request->validated('quantity');
        if (!$quantityOfProductsToDelete || $cartProduct->quantity - $quantityOfProductsToDelete <= 0) {
            $this->cartItemService->deleteFromCart($activeCart, $product);

            return ResponseResult::success();
        }

        return ResponseResult::success(
            CartItemResource::make(
                $this->cartItemService->decreaseCartProductQuantity($activeCart, $product, $quantityOfProductsToDelete)
            )
        );
    }
}
