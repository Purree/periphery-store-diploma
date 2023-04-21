<?php

namespace Database\Seeders;

use App\Exceptions\InvalidArgumentException;
use App\Helpers\RolePermissionsRelation;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{
    protected const TABLE_NAME = 'role_permission';

    /**
     * @throws InvalidArgumentException
     */
    public function run(): void
    {
        $rolePermissionRelations = (new RolePermissionsRelation())->getRelations();
        $relatedRoles = array_keys($rolePermissionRelations);
        $relatedPermissions = array_merge(...array_values($rolePermissionRelations));

        $storedRoles = Role::query()->whereIn('name', $relatedRoles)->get();
        $storedPermissions = Permission::query()->whereIn('name', $relatedPermissions)->get();

        if ($this->hasDifference($relatedPermissions, $storedPermissions, 'name')) {
            throw new InvalidArgumentException(__('Some of the related permissions doesn\'t exists in database'));
        }
        if ($this->hasDifference($relatedRoles, $storedRoles, 'name')) {
            throw new InvalidArgumentException(__('Some of the related roles doesn\'t exists in database'));
        }

        $this->clearTable();
        $this->fillTableWithRelations(
            $this->getRolePermissionIdRelations($rolePermissionRelations, $storedRoles, $storedPermissions)
        );
    }

    protected function hasDifference(array $array, Collection $collection, string $key): bool
    {
        return array_diff($array, $collection->pluck($key)->all()) !== [];
    }

    protected function clearTable(): void
    {
        DB::table(self::TABLE_NAME)->truncate();
    }

    protected function fillTableWithRelations(array $rolePermissionRelations): void
    {
        DB::table(self::TABLE_NAME)->insert($rolePermissionRelations);
    }

    protected function getRolePermissionIdRelations(
        array $rolePermissionRelations,
        Collection $storedRoles,
        Collection $storedPermissions
    ): array {
        $rolePermissionIdRelations = [];

        foreach ($rolePermissionRelations as $role => $permissions) {
            $roleId = $storedRoles->firstWhere('name', $role)->id;
            foreach ($permissions as $permission) {
                $permissionId = $storedPermissions->firstWhere('name', $permission)->id;
                $rolePermissionIdRelations[] = ['role_id' => $roleId, 'permission_id' => $permissionId];
            }
        }

        return $rolePermissionIdRelations;
    }
}
