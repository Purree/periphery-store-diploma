<?php

namespace App\DataTransferObjects;

readonly class RegisterUserDTO implements DTOInterface
{
    public function __construct(
        public string $name,
        public string $email,
        public string $password,
    ) {
    }
}
