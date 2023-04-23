<?php

namespace App\Models;

use App\Helpers\PriceWithDiscountTrait;
use App\Scopes\UnavailableScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;

class Product extends Model
{
    use SoftDeletes;
    use HasFactory;
    use PriceWithDiscountTrait;

    protected $casts = [
        'price' => 'float'
    ];

    protected $hidden = ['id'];

    protected static function booted(): void
    {
        static::addGlobalScope(
            new UnavailableScope()
        );
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function scopeInStock(Builder $builder): Builder
    {
        return $builder->where('quantity', '<>', 0);
    }

    public function seller(): BelongsTo
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    public function lastReview(): HasOne
    {
        return $this->hasOne(Review::class)->latestOfMany();
    }
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'product_category');
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }
}
