<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {
        $this->call([
            PermissionSeeder::class,
            RoleSeeder::class,
            RolePermissionSeeder::class,
            UserSeeder::class,
            ProductSeeder::class,
            CategorySeeder::class,
            ReviewSeeder::class,
            ReviewReplySeeder::class,
            BannerSeeder::class,
            OrderSeeder::class,
            OrderItemSeeder::class,
            UserDataSeeder::class
        ]);
    }
}
