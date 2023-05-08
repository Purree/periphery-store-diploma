<?php

namespace App\DataTransferObjects\UserData;

use App\DataTransferObjects\DTOInterface;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class UserDataIndexDTO implements DTOInterface
{
    /**
     * @param  User  $user
     * @param  class-string<Model>  $userDataModel
     */
    public function __construct(
        public User $user,
        public string $userDataModel
    ) {
    }
}
