<?php

namespace App\Services;

use App\Enums\StoredImagesFolderEnum;
use App\Filters\ProductFilter;
use App\Helpers\ImageFacade;
use App\Helpers\Results\ResponseResult;
use App\Http\Requests\CreateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ProductService
{
    public function index(ProductFilter $productFilter): JsonResponse
    {
        return ResponseResult::success(
            ProductResource::collection(
                Product::query()
                    ->filter($productFilter)
                    ->orderBy('created_at', 'desc')
                    ->withCount('reviews')
                    ->withAvg('reviews', 'rating')
                    ->inStock()
                    ->isAvailable()
                    ->cursorPaginate(100)
            )
        );
    }

    public function store(CreateProductRequest $request): JsonResponse
    {
        $seller = $request->user();

        $sellerId = $seller->id;
        $slug = Str::slug($request->title);
        $previewImagePath = null;
        $sku = $this->generateSku($seller, $slug);

        $previewImage = $request->validated('previewImage');

        if ($previewImage) {
            $previewImagePath = ImageFacade::make($previewImage)
                ->resize(512, 512, true)
                ->save(StoredImagesFolderEnum::productImages->value);
        }

        $product = Product::query()->create(
            [
                'seller_id' => $sellerId,
                'slug' => $slug,
                'preview_image' => $previewImagePath,
                'SKU' => $sku,
                'meta_title' => $request->validated('metaTitle'),
                ...(array)$request->validated()
            ]
        );

        Log::info("User {$request->user()} create {$product} product");

        return ResponseResult::success($product);
    }

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

    private function generateSku(User $seller, string $slug): string
    {
        return mb_substr(
            Str::slug($seller->name),
            0,
            4
        ).
        mb_substr(
            $slug,
            0,
            4
        ).
        str_pad(
            mb_substr((string)$seller->id, 0, 2),
            2,
            "0",
            STR_PAD_LEFT
        ).date('s');
    }
}
