<?php

namespace App\Services;

use App\Exceptions\ProductNotAvailableForPurchaseException;
use App\Exceptions\TooManyQuantitiesException;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CartItemService
{
    /**
     * @throws TooManyQuantitiesException|ProductNotAvailableForPurchaseException
     */
    public function update(Cart $cart, Product $product, int $quantity = 1): CartItem
    {
        $storedCartProduct = $cart->items->firstWhere('product_id', $product->id);
        $isCartHasProduct = $storedCartProduct !== null;

        if (
            $product->quantity < $quantity ||
            ($isCartHasProduct && $storedCartProduct->quantity + $quantity > CartItem::MAX_ITEM_QUANTITY)
        ) {
            throw new TooManyQuantitiesException($product->title);
        }

        if (!$product->is_available) {
            throw new ProductNotAvailableForPurchaseException();
        }

        $cartItemBuilder = $this->getCartItemBuilder($cart, $product);
        if (!$isCartHasProduct) {
            $cart->items()->create([
                'product_id' => $product->id,
                'quantity' => $quantity,
                'active' => true,
            ]);
        } else {
            $cartItemBuilder->update(['quantity' => $quantity]);
        }

        /** @psalm-suppress NullableReturnStatement */
        return $cartItemBuilder->with('product')->first();
    }

    public function destroy(Cart $cart, Product $product): void
    {
        $this->getCartItemBuilder($cart, $product)->delete();
    }

    private function getCartItemBuilder(Cart $cart, Product $product): HasMany
    {
        return $cart->items()
            ->where('cart_id', $cart->id)
            ->where('product_id', $product->id);
    }
}
