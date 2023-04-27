<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Product::class);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        return ResponseResult::success(
            ProductResource::collection(
                Product::query()
                    ->orderBy('created_at', 'desc')
                    ->withCount('reviews')
                    ->withAvg('reviews', 'rating')
                    ->inStock()
                    ->isAvailable()
                    ->cursorPaginate(100)
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product): JsonResponse
    {
        return ResponseResult::success(
            ProductResource::make(
                Product::query()
                    ->with(
                        ['seller', 'categories', 'images', 'categories.parent']
                    )
                    ->with([
                        'latestReview' => static function (HasOne $reply) {
                            $reply
                                ->withCount('replies')
                                ->get();
                        },
                        'latestReview.reviewer',
                        'latestReview.replies' =>
                            static function (HasMany $reply) {
                                $reply
                                    ->with('replier')
                                    ->withCount('children')
                                    ->where('parent_id', null)
                                    ->get();
                            },
                    ])
                    ->withCount('reviews')
                    ->withAvg('reviews', 'rating')
                    ->firstWhere('id', $product->id)
            )
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product): JsonResponse
    {
        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Product $product): JsonResponse
    {
        Log::info("User {$request->user()} delete {$product->id} product");
        $product->delete();

        return ResponseResult::success();
    }
}
