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
            'children' => self::collection($this->whenLoaded('children')),
            'replier' => UserResource::make($this->whenLoaded('replier')),
            'text' => $this->text,
            'updated_at' => $this->updated_at,
            'created_at' => $this->created_at
        ];
    }
}
