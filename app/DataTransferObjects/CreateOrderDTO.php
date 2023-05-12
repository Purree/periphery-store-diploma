<?php

namespace App\DataTransferObjects;

use App\Models\User;

readonly class CreateOrderDTO implements DTOInterface
{
    public function __construct(
        public User $user,
        public int $userNameId,
        public int $userAddressId,
        public int $userMobileId,
    ) {
    }
}
