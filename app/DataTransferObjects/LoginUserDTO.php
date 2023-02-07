<?php

namespace App\DataTransferObjects;

class LoginUserDTO
{
    public function __construct(
        public readonly string $email,
        public readonly string $password,
        public readonly bool $remember,
    ) {
    }
}