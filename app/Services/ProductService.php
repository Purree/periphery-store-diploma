<?php

namespace App\Services;

use App\Enums\StoredImagesFolderEnum;
use App\Enums\Structural\OrderStatus;
use App\Filters\ProductFilter;
use App\Helpers\ImageFacade;
use App\Helpers\Results\ResponseResult;
use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
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

        $isAvailable = (bool)$request->validated('isAvailable');
        $sellerId = $seller->id;
        $slug = Str::slug($request->title);
        $previewImagePath = $this->savePreviewImage($request->validated('previewImage'));
        $sku = $this->generateSku($seller, $slug);


        $product = Product::query()->create(
            [
                'seller_id' => $sellerId,
                'slug' => $slug,
                'preview_image' => $previewImagePath,
                'is_available' => $isAvailable,
                'SKU' => $sku,
                'meta_title' => $request->validated('metaTitle'),
                ...(array)$request->validated(),
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
                        'userReview' => $this->loadReviewRepliesCount(...),
                        'userReview.reviewer',
                        'userReview.replies' => $this->loadReviewReplies(...),
                        'latestReview' => $this->loadReviewRepliesCount(...),
                        'latestReview.reviewer',
                        'latestReview.replies' => $this->loadReviewReplies(...),
                    ])
                    ->withCount('reviews')
                    ->withAvg('reviews', 'rating')
                    ->firstWhere('id', $product->id)
            )
        );
    }

    public function update(UpdateProductRequest $request, Product $product): JsonResponse
    {
        Log::info("User {$request->user()} update {$product} product");

        // @TODO: Добавить возможность удаления прошлого превью
        // @TODO: Добавить удаление превью с сервера
        $previewImagePath = $this->savePreviewImage($request->validated('previewImage'));
        $isAvailable = (bool)$request->validated('isAvailable');
        $product->update(
            [
                'is_available' => $isAvailable,
                ...($request->validated('metaTitle') ? ['meta_title' => $request->validated('metaTitle')] : []),
                ...(null !== $previewImagePath ? ['preview_image' => $previewImagePath] : []),
                ...(array)$request->validated(),
            ]
        );

        return $this->show($product);
    }

    private function loadReviewReplies(HasMany $reply): Collection
    {
        return $reply
            ->with('replier')
            ->withCount('children')
            ->where('parent_id', null)
            ->get();
    }

    private function loadReviewRepliesCount(HasOne $reply): Collection
    {
        return $reply
            ->withCount('replies')
            ->get();
    }

    public function checkIsProductHasUnfinishedOrders(Product $product): bool
    {
        return $product->orderItems()->whereHas(
            'order',
            fn (Builder $builder) => $builder->whereHas(
                'status',
                fn (Builder $builder) => $builder->whereIn('name', OrderStatus::getFinishedOrderStatuses())
            ),
        )->exists();
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

    private function savePreviewImage(?string $previewImage): ?string
    {
        if ($previewImage) {
            return ImageFacade::make($previewImage)
                ->resize(512, 512)
                ->save(StoredImagesFolderEnum::productImages->value);
        }

        return null;
    }
}
