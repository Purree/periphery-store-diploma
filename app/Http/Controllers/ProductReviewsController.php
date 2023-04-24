<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Resources\ReviewResource;
use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\Request;

class ProductReviewsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Product $product)
    {
        return ResponseResult::success(
            ReviewResource::collection(
                Review::query()
                    ->where('product_id', $product->id)
                    ->where('parent_id', null)
                    ->with('reviewer')
                    ->withCount('children')
                    ->orderBy('created_at', 'desc')
                    ->cursorPaginate(100)
            )
        );
    }
}
