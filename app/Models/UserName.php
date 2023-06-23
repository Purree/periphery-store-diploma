<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserName extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $fillable = ['first_name', 'middle_name', 'last_name'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class, 'user_name_id');
    }

    protected function fullName(): Attribute
    {
        return Attribute::make(
            get: fn () => "{$this->middle_name} {$this->first_name}" . ($this->last_name ? " {$this->last_name}" : ''),
        );
    }
}
