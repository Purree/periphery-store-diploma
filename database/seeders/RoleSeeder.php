<?php

namespace Database\Seeders;

use App\Enums\Role as RoleEnum;
use App\Helpers\TableColumnUtils;
use App\Models\Role as RoleModel;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $roleTableUtils = new TableColumnUtils(new RoleModel(), 'name');

        $allRoles = RoleEnum::getAllNames();
        $roleTableUtils->fillWithUniqueValues($allRoles);
        $roleTableUtils->removeUnusedFields($allRoles);
    }
}
