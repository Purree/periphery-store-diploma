<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'order' => OrderResource::make($this->whenLoaded('order')),
            'product' => ProductResource::make($this->whenLoaded('product')),
            'sku' => $this->sku,
            'price' => $this->price,
            'discount' => $this->discount,
            'totalPrice' => $this->total_price,
            'quantity' => $this->quantity,
            'createAt' => $this->create_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
