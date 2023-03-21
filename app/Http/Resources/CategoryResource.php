<?php

namespace App\Http\Resources;

use App\Helpers\ImageFacade;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
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
            'image' => ImageFacade::getPassedOrDefaultImageUrl($this->image),
            'parent' => new CategoryResource($this->whenLoaded('parent')),
        ];
    }
}
