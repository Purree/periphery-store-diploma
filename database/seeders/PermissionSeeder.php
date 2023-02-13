<?php

namespace Database\Seeders;

use App\Enums\Permission as PermissionEnum;
use App\Helpers\TableColumnUtils;
use App\Models\Permission as PermissionModel;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $permissionTableUtils = new TableColumnUtils(new PermissionModel(), 'name');

        $allPermissions = PermissionEnum::getAllNames();
        $permissionTableUtils->fillWithUniqueValues($allPermissions);
        $permissionTableUtils->removeUnusedFields($allPermissions);
    }
}
