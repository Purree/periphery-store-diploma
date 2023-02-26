<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Enums\Role as RoleEnum;
use App\Models\Role as RoleModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Collection;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function sessions(): HasMany
    {
        return $this->hasMany(Session::class);
    }

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(RoleModel::class, 'user_role');
    }

    public function getPermissions(): Collection
    {
        return $this->roles()->with('permissions')->get()
            ->pluck('permissions')->flatten()
            ->map(static function ($item) {
                unset($item->pivot);

                return $item;
            })
            ->unique('id');
    }

    public function addRole(RoleEnum $role): void
    {
        $roleUsers = RoleEnum::firstWhere('name', $role->name)->users();
        $roleUsers->attach($this->id);
    }

    public function hasRole(RoleEnum|string $role): bool
    {
        $roleName = is_string($role) ? $role : $role->name;

        return (bool) $this->roles()->firstWhere('name', $roleName);
    }

    public function hasPermission(\App\Enums\Permission|string $permission): bool
    {
        $permissionName = is_string($permission) ? $permission : $permission->name;

        return (bool) $this->getPermissions()->firstWhere('name', $permissionName);
    }

    public function isAdministrator(): bool
    {
        return $this->hasRole(RoleEnum::administrator);
    }
}
