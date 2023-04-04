<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PopularCategoriesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): JsonResponse
    {
        return ResponseResult::success(
            CategoryResource::collection(
                Category::query()->withCount('products')->orderBy('products_count', 'desc')->limit(10)->get()
            )
        );
    }
}
