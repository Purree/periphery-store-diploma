<?php

namespace App\Http\Resources;

use App\Helpers\ImageFacade;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BannerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'url' => $this->url,
            'image' => ImageFacade::getImageUrl($this->image),
        ];
    }
}
