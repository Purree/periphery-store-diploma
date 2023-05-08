<?php

namespace App\DataTransferObjects\UserData;

use App\DataTransferObjects\DTOInterface;
use Illuminate\Database\Eloquent\Relations\HasMany;

readonly class UserDataStoreDTO implements DTOInterface
{
    public function __construct(
        public HasMany $userDataBuilder,
        public array $params
    ) {
    }
}
