<?php

namespace App\Http\Resources;

use App\Helpers\ImageFacade;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // TODO: Добавить количество продаж, множество фотографий в карточку и рейтинг
        // TODO: Fix n+1 permissions
        // TODO: Add pagination
        return [
            'title' => $this->title,
            'metaTitle' => $this->meta_title,
            'slug' => $this->slug,
            'description' => $this->description,
            'previewImage' => ImageFacade::getPassedOrDefaultImageUrl($this->preview_image),
            'SKU' => $this->SKU,
            'price' => $this->price,
            'discount' => $this->discount,
            'priceWithDiscount' => $this->priceWithDiscount,
            'quantity' => $this->quantity,
            'is_available' => $this->is_available,
            'categories' => CategoryResource::collection($this->whenLoaded('categories')),
            ...$this->whenLoaded(
                'seller',
                [
                    'seller' => new UserResource($this->seller),
                    ...$this->when(Gate::allows('update', $this->resource), [
                        'create_at' => $this->created_at,
                        'updated_at' => $this->updated_at,
                        'deleted_at' => $this->deleted_at,
                    ], []),
                ],
                []
            ),
        ];
    }
}
