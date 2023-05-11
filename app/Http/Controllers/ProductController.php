<?php

namespace App\Http\Controllers;

use App\Filters\ProductFilter;
use App\Helpers\Results\ResponseResult;
use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use App\Services\ProductService;
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
    public function update(UpdateProductRequest $request, Product $product): JsonResponse
    {
        return $this->productService->update($request, $product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Product $product): JsonResponse
    {
        if ($this->productService->checkIsProductHasUnfinishedOrders($product)) {
            return ResponseResult::error(
                ['product' => __('errors.productHasIncompleteOrders')],
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }

        Log::info("User {$request->user()} delete {$product->id} product");
        $product->delete();

        return ResponseResult::success();
    }
}
