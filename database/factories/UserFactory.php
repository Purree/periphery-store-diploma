<?php

namespace Database\Factories;

use App\Enums\Role as RoleEnum;
use App\Models\Role as RoleModel;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<User>
 */
final class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
    }

    public function associateWithRoles(?RoleEnum $role = null): UserFactory
    {
        $roles = $role === null ? RoleModel::all() : [RoleModel::query()->firstWhere('name', $role->name)];

        return $this->hasAttached($roles);
    }
}
