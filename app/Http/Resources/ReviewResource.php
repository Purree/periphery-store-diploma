<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
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
            'id' => $this->id,
            'product' => ProductResource::make($this->whenLoaded('product')),
            'parent' => self::make($this->whenLoaded('parent')),
            'replies' => ReviewReplyResource::collection($this->whenLoaded('replies')),
            'rating' => $this->rating,
            'advantages' => $this->advantages,
            'disadvantages' => $this->disadvantages,
            'comments' => $this->comments,
            'isAnonymous' => $this->is_anonymous,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            ...(isset($this->replies_count) ? ['repliesCount' => $this->replies_count] : []),
            ...$this->getReviewerDataIfItsPossible($request),
        ];
    }

    private function getReviewerDataIfItsPossible(Request $request): array
    {
        if (
            !$this->is_anonymous ||
            ($this->checkIsRelationLoaded('reviewer') && $request->user()?->id === $this->reviewer->id)
        ) {
            return [
                'reviewer' => UserResource::make($this->whenLoaded('reviewer')),
            ];
        }

        return ['reviewer' => null];
    }

}
