<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionDTOResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'amount' => $this->amount,
            'status' => $this->status->name,
            'createdAt' => $this->createdAt,
            'isRefundable' => $this->isRefundable,
            'cancellationReason' => $this->cancellationReason,
            'refundedAmount' => $this->refundedAmount,
            'expiresAt' => $this->expiresAt,
            'capturedAt' => $this->capturedAt,
        ];
    }
}
