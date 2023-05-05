<?php

namespace Database\Seeders;

use App\Enums\Structural\OrderStatus as OrderStatusEnum;
use App\Helpers\TableColumnUtils;
use App\Models\OrderStatus as OrderStatusModel;
use Illuminate\Database\Seeder;

class OrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissionTableUtils = new TableColumnUtils(new OrderStatusModel(), 'name');

        $allPermissions = OrderStatusEnum::getAllNames();
        $permissionTableUtils->fillWithUniqueValues($allPermissions);
        $permissionTableUtils->removeUnusedFields($allPermissions);
    }
}
