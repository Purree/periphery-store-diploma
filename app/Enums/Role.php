<?php

namespace App\Enums;

enum Role implements ArrayableEnumInterface
{
    use ArrayableEnumTrait;

    /**
     * After adding a new role here, run the following command:
     * php artisan db:seed --class=RoleSeeder
     */
    case administrator;
    case seller;
    case customer;
}
