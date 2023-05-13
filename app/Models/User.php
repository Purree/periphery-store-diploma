<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Enums\Structural\Role as RoleEnum;
use App\Models\Role as RoleModel;
use Filament\Models\Contracts\FilamentUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Collection;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements FilamentUser
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
        'avatar',
        'is_organization'
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

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function replies(): HasMany
    {
        return $this->hasMany(ReviewReply::class, 'replier_id');
    }

    public function carts(): HasMany
    {
        return $this->hasMany(Cart::class, 'user_id');
    }

    public function activeCart(): HasOne
    {
        return $this->hasOne(Cart::class)->active()->latestOfMany();
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class, 'user_id');
    }

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class, 'user_id');
    }

    public function addresses(): HasMany
    {
        return $this->hasMany(UserAddress::class, 'user_id');
    }

    public function mobiles(): HasMany
    {
        return $this->hasMany(UserMobile::class, 'user_id');
    }

    public function names(): HasMany
    {
        return $this->hasMany(UserName::class, 'user_id');
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
        $roleUsers = RoleModel::query()->firstWhere('name', $role->name)->users();
        $roleUsers->attach($this->id);
    }

    public function hasRole(RoleEnum|string $role): bool
    {
        $roleName = is_string($role) ? $role : $role->name;

        return (bool) $this->roles()->firstWhere('name', $roleName);
    }

    public function hasPermission(\App\Enums\Structural\Permission|string $permission): bool
    {
        $permissionName = is_string($permission) ? $permission : $permission->name;

        return (bool) $this->getPermissions()->firstWhere('name', $permissionName);
    }

    public function isAdministrator(): bool
    {
        return $this->hasRole(RoleEnum::administrator);
    }

    public function canAccessFilament(): bool
    {
        return $this->isAdministrator();
    }
}
