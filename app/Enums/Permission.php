<?php

namespace App\Enums;

enum Permission
{
    use ArrayableEnumTrait;

    /**
     * After adding a new permission here, run the following command:
     * php artisan db:seed --class=PermissionSeeder
     */
    case view_products;
    case change_self_data;
}
