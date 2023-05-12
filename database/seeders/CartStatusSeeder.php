<?php

namespace Database\Seeders;

use App\Enums\Structural\Statuses\CartStatus as CartStatusEnum;
use App\Helpers\TableColumnUtils;
use App\Models\CartStatus as CartStatusModel;
use Illuminate\Database\Seeder;

class CartStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissionTableUtils = new TableColumnUtils(new CartStatusModel(), 'name');

        $allPermissions = CartStatusEnum::getAllNames();
        $permissionTableUtils->fillWithUniqueValues($allPermissions);
        $permissionTableUtils->removeUnusedFields($allPermissions);
    }
}
