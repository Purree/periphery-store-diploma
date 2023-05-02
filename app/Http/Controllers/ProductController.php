<?php

namespace App\Http\Controllers;

use App\Filters\ProductFilter;
use App\Helpers\Results\ResponseResult;
use App\Http\Requests\CreateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Services\ProductService;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

final class ProductController extends Controller
{
    public function __construct(private readonly ProductService $productService)
    {
        $this->authorizeResource(Product::class);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(ProductFilter $productFilter): JsonResponse
    {
        return $this->productService->index($productFilter);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateProductRequest $request): JsonResponse
    {
        return $this->productService->store($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product): JsonResponse
    {
        return $this->productService->show($product);
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
