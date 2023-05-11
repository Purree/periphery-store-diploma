<?php

namespace App\Http\Resources;

use App\Helpers\ImageFacade;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

final class ProductResource extends JsonResource
{
    use AdditionalConditionallyLoadsAttributesTrait;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'metaTitle' => $this->meta_title,
            'slug' => $this->slug,
            'description' => $this->description,
            'previewImage' => ImageFacade::getPassedOrDefaultImageUrl($this->preview_image),
            'SKU' => $this->SKU,
            'price' => $this->price,
            'discount' => $this->discount,
            'priceWithDiscount' => $this->{Product::getPriceWithDiscountColumnName()},
            'quantity' => $this->quantity,
            'isAvailable' => $this->is_available,
            'categories' => CategoryResource::collection($this->whenLoaded('categories')),
            'images' => ProductImageResource::collection($this->whenLoaded('images')),
            ...$this->getAdditionalProductDataIfRelationsLoaded(),
        ];
    }

    private function getAdditionalProductDataIfRelationsLoaded(): array
    {
        return [
            ...$this->getReviewsDataIfItsLoaded(),
            ...$this->getDataForSellerIsLoaded(),
        ];
    }

    private function getReviewsDataIfItsLoaded(): array
    {
        $reviewsData = [
            'reviews' => ReviewResource::collection($this->whenLoaded('reviews')),
            'userReview' => ReviewResource::make($this->whenLoaded('userReview')),
            'latestReview' => ReviewResource::make($this->whenLoaded('latestReview')),
            ...(isset($this->reviews_count) ? ['reviewsCount' => $this->reviews_count] : []),
            ...(isset($this->reviews_avg_rating) ? ['rating' => round($this->reviews_avg_rating, 2)] : []),
        ];

        if ($this->checkIsRelationLoaded('userReview')) {
            $reviewsData['canLeaveReview'] = Gate::allows('leaveReview', $this->resource);
        }

        return $reviewsData;
    }

    private function getDataForSellerIsLoaded(): array
    {
        if ($this->checkIsRelationLoaded('seller')) {
            return [
                'seller' => UserResource::make($this->seller),
                'isAvailableForBuying' => Gate::allows('buy', $this->resource),
                ...((Gate::allows('viewAdditionalResourceData', $this->resource)) ? [
                    'created_at' => $this->created_at,
                    'updated_at' => $this->updated_at,
                    'deleted_at' => $this->deleted_at,
                ] : []),
            ];
        }

        return [];
    }
}
