<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'product' => ProductResource::make($this->whenLoaded('product')),
            'parent' => self::make($this->whenLoaded('parent')),
            'children' => self::collection($this->whenLoaded('children')),
            'rating' => $this->rating,
            'advantages' => $this->advantages,
            'disadvantages' => $this->disadvantages,
            'comments' => $this->comments,
            'isAnonymous' => $this->is_anonymous,
            'reviewer' => $this->is_anonymous ? null : UserResource::make($this->whenLoaded('reviewer')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            ...(isset($this->children_count) ? ['childrenCount' => $this->children_count] : [])
        ];
    }
}
