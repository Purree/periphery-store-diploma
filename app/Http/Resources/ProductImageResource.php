<?php

namespace App\Http\Resources;

use App\Helpers\ImageFacade;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string>
     */
    public function toArray(Request $request): array
    {
        return [
            ImageFacade::getImageUrl($this->image)
        ];
    }
}
