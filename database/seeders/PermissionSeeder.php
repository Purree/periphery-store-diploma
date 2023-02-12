<?php

namespace Database\Seeders;

use App\Enums\Permission as PermissionEnum;
use App\Models\Permission as PermissionModel;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $allPermissions = PermissionEnum::getAllNames();
        $currentPermissions = PermissionModel::all()->pluck('name')->toArray();
        $newPermissions = array_diff($allPermissions, $currentPermissions);

        foreach ($newPermissions as $permission) {
            DB::table('permissions')->insert(
                [
                    'name' => $permission
                ]
            );
        }
    }
}
