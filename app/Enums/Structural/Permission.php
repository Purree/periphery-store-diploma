<?php

namespace App\Enums\Structural;

use App\Enums\ArrayableEnumInterface;
use App\Enums\ArrayableEnumTrait;

enum Permission implements ArrayableEnumInterface
{
    use ArrayableEnumTrait;

    /**
     * @after adding a new permission here or
     * @after deleting a permission from here,
     * run the following
     * @command php artisan db:seed --class=PermissionSeeder
     * @command php artisan db:seed --class=RolePermissionSeeder
     * and, if a permission isn't secure, add it into
     * @see /resources/js/helpers/enums/PermissionsEnum.js
     */

    /**
     * If you want to associate a permission with a role, edit method __construct in
     * @see RolePermissionsRelation class
     */

    /**
     * General
     */
    case change_own_data;

    /**
     * Customer
     */
    case buy_products;
    case view_products;

    /**
     * Seller
     */
    case create_products;
    case update_own_products;
    case delete_own_products;

    /**
     * Administrator
     */
    case manipulate_banners;
    case manipulate_categories;
    case manipulate_all_products;
}
