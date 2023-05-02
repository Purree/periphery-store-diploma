<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserProductsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): JsonResponse
    {
        return ResponseResult::success(
            ProductResource::collection(
                Product::query()
                    ->where('seller_id', $request->user()->id)
                    ->get()
            )
        );
    }
}
