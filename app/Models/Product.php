<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $casts = [
        'price' => 'float',
    ];

    protected $hidden = ['id'];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    // @TODO: Add reviews and rating
    public function seller(): BelongsTo
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'product_category');
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }

    protected function priceWithDiscount(): Attribute
    {
        return Attribute::make(
            get: fn () => round($this->price - ($this->price * ($this->discount / 100)), 2),
        );
    }
}
