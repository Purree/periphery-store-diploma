<?php

namespace App\Enums;

enum Permission implements ArrayableEnumInterface
{
    use ArrayableEnumTrait;

    /**
     * After adding a new permission here, run the following command:
     * php artisan db:seed --class=PermissionSeeder
     * and, if it isn't secure, add it into
     * /resources/js/helpers/enums/PermissionsEnum.js
     */
    case view_products;
    case change_own_data;
}
