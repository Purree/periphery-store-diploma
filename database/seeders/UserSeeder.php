<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @psalm-suppress UndefinedMagicMethod
     */
    public function run(): void
    {
        User::factory()
            ->count(100)
            ->associateWithRoles()
            ->create();
    }
}
