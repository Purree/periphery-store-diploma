<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
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
            'link' => $this->link,
            'user' => UserResource::make($this->whenLoaded('user')),
            'order' => OrderResource::make($this->whenLoaded('order')),
            ...$this->checkIsRelationLoaded('status') ? ['status' => $this->status->name] : [],
        ];
    }
}
