<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['user_id', 'status_id', 'token', 'user_name_id', 'user_mobile_id', 'user_address_id'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id')->withTrashed();
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(OrderStatus::class, 'status_id');
    }

    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class, 'order_id');
    }

    public function address(): BelongsTo
    {
        return $this->belongsTo(UserAddress::class, 'user_address_id')->withTrashed();
    }

    public function mobile(): BelongsTo
    {
        return $this->belongsTo(UserMobile::class, 'user_mobile_id')->withTrashed();
    }

    public function name(): BelongsTo
    {
        return $this->belongsTo(UserName::class, 'user_name_id')->withTrashed();
    }

    public function transaction(): HasOne
    {
        return $this->hasOne(Transaction::class)->withTrashed();
    }

    public function totalCost(): Attribute
    {
        return Attribute::make(
            get: $this->getTotalCost(...),
        );
    }

    private function getTotalCost(): float
    {
        return round($this->items->pluck(OrderItem::getTotalPriceColumnName())->sum(), 2);
    }
}
