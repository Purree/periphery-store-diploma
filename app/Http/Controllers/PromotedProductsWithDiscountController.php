<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class PromotedProductsWithDiscountController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return ResponseResult::success(
            ProductResource::collection(
                Product::query()
                    ->orderByRaw('(price - '.Product::getPriceWithDiscountColumnName().') desc')
                    ->withCount('reviews')
                    ->withAvg('reviews', 'rating')
                    ->inStock()
                    ->isAvailable()
                    ->limit(5)
                    ->get()
            )
        );
    }
}
