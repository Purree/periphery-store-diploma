<?php

namespace App\Services;

use App\Exceptions\ProductNotAvailableForPurchaseException;
use App\Exceptions\TooManyQuantitiesException;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;

class CartItemService
{
    /**
     * @throws TooManyQuantitiesException|ProductNotAvailableForPurchaseException
     */
    public function addToCart(Cart $cart, Product $product, int $quantity = 1): CartItem
    {
        $storedCartProduct = $cart->items->firstWhere('product_id', $product->id);
        $isCartHasProduct = $storedCartProduct !== null;

        if (
            $product->quantity < $quantity ||
            ($isCartHasProduct && $storedCartProduct->quantity + $quantity > CartItem::MAX_ITEM_QUANTITY)
        ) {
            throw new TooManyQuantitiesException((string)__("errors.tooManyQuantities"));
        }

        if (!$product->is_available) {
            throw new ProductNotAvailableForPurchaseException((string)__("errors.productNotAvailableForPurchase"));
        }
        if (!$isCartHasProduct) {
            return $cart->items()->create([
                'product_id' => $product->id,
                'quantity' => $quantity,
                'active' => true,
            ]);
        }

        $cartItemBuilder = CartItem::query()
            ->where('cart_id', $cart->id)
            ->where('product_id', $product->id);

        $cartItemBuilder->increment('quantity', $quantity);

        return $cartItemBuilder->with('product')->first();
    }
}
