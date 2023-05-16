<?php

namespace App\Http\Controllers;

use App\Exceptions\ProductNotAvailableForPurchaseException;
use App\Exceptions\TooManyQuantitiesException;
use App\Helpers\Results\ResponseResult;
use App\Http\Requests\CreateOrderRequest;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Services\OrderService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\RateLimiter;
use Symfony\Component\HttpKernel\Exception\TooManyRequestsHttpException;

class OrderController extends Controller
{
    public function __construct(private readonly OrderService $orderService)
    {
        $this->authorizeResource(Order::class);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        return ResponseResult::success(
            OrderResource::collection(
                Order::query()
                    ->where('user_id', $request->user()->id)
                    ->with(['status', 'items', 'items.product', 'address', 'mobile', 'name'])
                    ->orderByDesc('created_at')
                    ->get()
            )
        );
    }

    /**
     * Create order from active user cart.
     */
    public function store(CreateOrderRequest $request): JsonResponse
    {
        try {
            DB::transaction(function () use ($request) {
                $cart = $request->user()->activeCart()->with(['items', 'items.product'])->first();

                if (!$cart || !$this->orderService->allowsOrderCart($cart)) {
                    throw new ProductNotAvailableForPurchaseException();
                }

                if (!RateLimiter::attempt(
                    'createOrder:'.$request->ip(),
                    1,
                    static fn () => null
                )) {
                    throw new TooManyRequestsHttpException();
                }

                $this->orderService->store($cart, $request->toDTO());
            });
        } catch (TooManyQuantitiesException|ProductNotAvailableForPurchaseException $exception) {
            return ResponseResult::error(
                ['cart' => $exception->getMessage()],
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }


        return ResponseResult::success();
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order): JsonResponse
    {
        return ResponseResult::success(
            OrderResource::make(
                Order::query()
                    ->with(['status', 'items', 'items.product', 'address', 'mobile', 'name'])
                    ->firstWhere('id', $order->id)
            )
        );
    }
}
