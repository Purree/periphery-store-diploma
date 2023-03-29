<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection,
            ...(method_exists($this, 'perPage') ? [
                'pagination' => [
                    'size' => $this->perPage(),
                    'total' => $this->total(),
                    'currentPage' => $this->currentPage(),
                    'lastPage' => $this->lastPage(),
                ],
            ] : []),
        ];
    }
}
