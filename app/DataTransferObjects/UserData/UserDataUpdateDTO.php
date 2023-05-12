<?php

namespace App\DataTransferObjects\UserData;

use App\DataTransferObjects\DTOInterface;
use Illuminate\Database\Eloquent\Model;

readonly class UserDataUpdateDTO implements DTOInterface
{
    public function __construct(
        public Model $userData,
        public UserDataStoreDTO $userDataUpdateDTO,
    ) {
    }
}
