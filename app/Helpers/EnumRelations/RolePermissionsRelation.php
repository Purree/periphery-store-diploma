<?php

namespace App\Helpers\EnumRelations;

use App\Enums\Structural\Permission;
use App\Enums\Structural\Role;

class RolePermissionsRelation extends AbstractEnumRelation
{
    public function __construct()
    {
        /**
         * @after editing that relations, run the following
         * @command php artisan db:seed --class=RolePermissionSeeder
         */
        $this->createRelation(Role::administrator, ...Permission::cases());
        $this->createRelation(
            Role::customer,
            Permission::change_own_data,
            Permission::view_products,
            Permission::buy_products
        );
        $this->createRelation(
            Role::seller,
            Permission::change_own_data,
            Permission::create_products,
            Permission::delete_own_products,
            Permission::update_own_products
        );
    }
}
