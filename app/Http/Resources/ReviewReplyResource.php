<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReviewReplyResource extends JsonResource
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
            'review' => self::make($this->whenLoaded('review')),
            'children' => self::collection($this->whenLoaded('children')),
            ...(isset($this->children_count) ? ['childrenCount' => $this->children_count] : []),
            'replier' => UserResource::make($this->whenLoaded('replier')),
            'text' => $this->text,
            'updated_at' => $this->updated_at,
            'created_at' => $this->created_at
        ];
    }
}
