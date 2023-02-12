<?php

namespace Database\Seeders;

use App\Enums\Role as RoleEnum;
use App\Models\Role as RoleModel;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $allRoles = RoleEnum::getAllNames();
        $currentRoles = RoleModel::all()->pluck('name')->toArray();
        $newRoles = array_diff($allRoles, $currentRoles);

        foreach ($newRoles as $role) {
            DB::table('roles')->insert(
                [
                    'name' => $role
                ]
            );
        }
    }
}
