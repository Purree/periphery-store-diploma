<?php

namespace App\Enums\Structural;

use App\Enums\ArrayableEnumInterface;
use App\Enums\ArrayableEnumTrait;
use App\Helpers\EnumRelations\RolePermissionsRelation;

enum Role implements ArrayableEnumInterface
{
    use ArrayableEnumTrait;

    /**
     * @after adding a new role here or
     * @after deleting a role from here,
     * run the following
     * @command php artisan db:seed --class=RoleSeeder
     * and, if a role isn't secure, add it into
     * @see /resources/js/helpers/enums/RolesEnum.js
     */

    /**
     * If you want to associate a permission with a role, edit method __construct in
     * @see RolePermissionsRelation class
     */
    case administrator;
    case seller;
    case customer;
}
