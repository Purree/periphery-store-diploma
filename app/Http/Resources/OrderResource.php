<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'user' => UserResource::make($this->whenLoaded('user')),
            ...$this->getAdditionalOrderDataIfItsPossible(),
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }

    private function getAdditionalOrderDataIfItsPossible(): array
    {
        $additionalRelationsData = [];
        switch (true) {
            case $this->checkIsRelationLoaded('items'):
                $additionalRelationsData['items'] = OrderItemResource::collection($this->items);
                $additionalRelationsData['totalCost'] = $this->totalCost;
                // no break
            case $this->checkIsRelationLoaded('status'):
                $additionalRelationsData['status'] = $this->status->name;
                // no break
            case $this->checkIsRelationLoaded('address'):
                $additionalRelationsData['address'] = UserAddressResource::make($this->address)->address;
                // no break
            case $this->checkIsRelationLoaded('mobile'):
                $additionalRelationsData['mobile'] = UserMobileResource::make($this->mobile)->mobile;
                // no break
            case $this->checkIsRelationLoaded('name'):
                $additionalRelationsData['name'] = UserNameResource::make($this->name);
        }

        return $additionalRelationsData;
    }
}
