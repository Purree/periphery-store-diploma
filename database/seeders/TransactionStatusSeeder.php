<?php

namespace Database\Seeders;

use App\Enums\Structural\Statuses\CartStatus as CartStatusEnum;
use App\Helpers\TableColumnUtils;
use App\Models\TransactionStatus as TransactionStatusModel;
use Illuminate\Database\Seeder;

class TransactionStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissionTableUtils = new TableColumnUtils(new TransactionStatusModel(), 'name');

        $allPermissions = CartStatusEnum::getAllNames();
        $permissionTableUtils->fillWithUniqueValues($allPermissions);
        $permissionTableUtils->removeUnusedFields($allPermissions);
    }
}
