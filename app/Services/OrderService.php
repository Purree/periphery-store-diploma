<?php

namespace App\Services;

use App\DataTransferObjects\CreateOrderDTO;
use App\Enums\Structural\Statuses\CartStatus as CartStatusEnum;
use App\Enums\Structural\Statuses\OrderStatus as OrderStatusEnum;
use App\Exceptions\TooManyQuantitiesException;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\OrderStatus as OrderStatusModel;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;

class OrderService
{
    public function __construct(private readonly CartService $cartService)
    {
    }

    public function allowsOrderCart(Cart $cart): bool
    {
        return !(
            $this->getCartProducts($cart)
                ->contains(
                    fn (Product $product) => !Gate::allows('buy', $product)
                )
        );
    }

    /**
     * @throws TooManyQuantitiesException
     */
    public function store(Cart $cart, CreateOrderDTO $dto): void
    {
        $this->cartService->updateStatus($cart, CartStatusEnum::checkout);

        $order = $this->createOrder($dto);

        $this->createOrderItems($cart, $order);
    }

    private function createOrder(CreateOrderDTO $dto): Order
    {
        /** @psalm-suppress UndefinedInterfaceMethod */
        return Order::query()
            ->create([
                'user_id' => $dto->user->id,
                'status_id' =>
                    OrderStatusModel::getIdFromEnum(OrderStatusEnum::new),
                'token' => Str::random(10),
                'user_name_id' => $dto->userNameId,
                'user_mobile_id' => $dto->userMobileId,
                'user_address_id' => $dto->userAddressId,
            ]);
    }

    /**
     * @throws TooManyQuantitiesException
     */
    private function createOrderItems(Cart $cart, Order $order): void
    {
        $cartProducts = Product::query()
            ->whereIn('id', $this->getCartProducts($cart)->pluck('id'))
            ->lockForUpdate()
            ->get();

        OrderItem::query()->insert($this->getItemsForOrderCreate($cart, $order, $cartProducts));
    }

    private function getCartProducts(Cart $cart): Collection
    {
        return $cart->items->pluck('product');
    }

    /**
     * @throws TooManyQuantitiesException
     */
    private function getItemsForOrderCreate(Cart $cart, Order $order, EloquentCollection $cartProducts): array
    {
        $orderItems = [];
        $productQuantities = $cart->items->pluck('quantity', 'product_id')->toArray();
        foreach ($cartProducts as $product) {
            $productQuantity = $productQuantities[$product->id];
            if ($productQuantity > $product->quantity) {
                throw new TooManyQuantitiesException($product->title);
            }

            $orderItems[$product->id]['order_id'] = $order->id;
            $orderItems[$product->id]['sku'] = $product->SKU;
            $orderItems[$product->id]['price'] = $product->price;
            $orderItems[$product->id]['product_id'] = $product->id;
            $orderItems[$product->id]['discount'] = $product->discount;
            $orderItems[$product->id]['quantity'] = $productQuantity;
        }

        return $orderItems;
    }
}
