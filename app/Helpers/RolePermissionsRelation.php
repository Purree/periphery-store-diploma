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
         * After adding a new role here, run the following command:
         * php artisan db:seed --class=RolePermissionSeeder
         */
        $this->createRelation(Role::administrator, ...Permission::cases());
        $this->createRelation(Role::customer, Permission::view_products, Permission::change_own_data);
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
