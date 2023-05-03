<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Requests\UpdateProductCategoriesRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class UpdateProductCategoriesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(UpdateProductCategoriesRequest $request, Product $product): JsonResponse
    {
        $newCategories = $request->validated('categories');
        $currentProductCategories = $product->categories->pluck('slug')->toArray();
        $deletedCategoriesSlugs = array_diff($currentProductCategories, $newCategories);
        $appliedCategoriesSlugs = array_diff($newCategories, $currentProductCategories);

        $deletedCategoriesIds = $this->getCategoriesIdsBySlugs($deletedCategoriesSlugs);
        $appliedCategoriesIds = $this->getCategoriesIdsBySlugs($appliedCategoriesSlugs);

        DB::transaction(static function () use ($product, $deletedCategoriesIds, $appliedCategoriesIds) {
            $product->categories()->detach($deletedCategoriesIds);
            $product->categories()->attach($appliedCategoriesIds);
        });

        return ResponseResult::success();
    }

    private function getCategoriesIdsBySlugs(array $slugs): array
    {
        return Category::query()->whereIn('slug', $slugs)->pluck('id')->toArray();
    }
}
