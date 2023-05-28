<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Models\Product;
use Illuminate\Http\JsonResponse;

class ProductPreviewController extends Controller
{
    public function destroy(Product $product): JsonResponse
    {
        $product->deletePreview();
        return ResponseResult::success();
    }
}
