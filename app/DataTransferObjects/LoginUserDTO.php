<?php

namespace App\DataTransferObjects;

readonly class LoginUserDTO implements DTOInterface
{
    public function __construct(
        public string $email,
        public string $password,
        public bool $remember,
    ) {
    }
}
