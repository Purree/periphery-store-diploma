<?php

namespace App\Helpers;

use App\Enums\Permission;
use App\Enums\Role;

class RolePermissionsRelation
{
    protected array $relations = [];

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

    public function getRelations(): array
    {
        return $this->relations;
    }

    protected function createRelation(Role $role, Permission ...$permissions): void
    {
        foreach ($permissions as $permission) {
            $this->relations[$role->name][] = $permission->name;
        }
    }
}
