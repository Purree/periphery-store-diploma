<?php

namespace App\DataTransferObjects;

use App\Enums\Structural\Statuses\TransactionStatus;

readonly class TransactionDTO implements DTOInterface
{
    public function __construct(
        public float $amount,
        public TransactionStatus $status,
        public \DateTime $createdAt,
        public bool $isRefundable,
        public ?string $cancellationReason = null,
        public ?float $refundedAmount = null,
        public ?\DateTime $expiresAt = null,
        public ?\DateTime $capturedAt = null,
    ) {
    }
}
