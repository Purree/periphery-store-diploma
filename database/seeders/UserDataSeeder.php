<?php

namespace Database\Seeders;

use App\Models\UserAddress;
use App\Models\UserMobile;
use App\Models\UserName;
use Illuminate\Database\Seeder;

class UserDataSeeder extends Seeder
{
    public function run(): void
    {
        UserName::factory()
            ->count(1000)
            ->create();
        UserMobile::factory()
            ->count(1000)
            ->create();
        UserAddress::factory()
            ->count(1000)
            ->create();
    }
}
