<?php

namespace App\Models;

use App\Filters\QueryFilter;
use App\Helpers\PriceWithDiscountTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Laravel\Scout\Attributes\SearchUsingFullText;
use Laravel\Scout\Searchable;

class Product extends Model
{
    use Searchable;
    use SoftDeletes;
    use HasFactory;
    use PriceWithDiscountTrait;

    protected $casts = [
        'price' => 'float',
        'is_available' => 'bool',
    ];

    protected $hidden = ['id'];
    protected $guarded = ['id'];

    #[SearchUsingFullText(['title', 'description'])]
    public function toSearchableArray(): array
    {
        return [
            'title' => $this->title,
            'description' => $this->description
        ];
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function scopeIsAvailable(Builder $builder): Builder
    {
        return $builder->where('is_available', true);
    }

    public function scopeInStock(Builder $builder): Builder
    {
        return $builder->where('quantity', '>', 0);
    }

    protected function inStock(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->quantity > 0,
        );
    }

    public function scopeFilter(Builder $builder, QueryFilter $filter): Builder
    {
        return $filter->apply($builder);
    }

    public function seller(): BelongsTo
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    public function userReview(): HasOne
    {
        /** @psalm-suppress NoInterfaceProperties */
        return $this->hasOne(Review::class)->where('user_id', Auth::user()?->id)->latest();
    }

    public function latestReview(): HasOne
    {
        /** @psalm-suppress NoInterfaceProperties */
        return $this->hasOne(Review::class)->where('user_id', '<>', Auth::user()?->id)
            ->latestOfMany();
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'product_category');
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }

    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function deletePreview(): void
    {
        if ($this->preview_image) {
            Storage::disk('public')->delete(
                $this->preview_image,
            );
        }

        $this->update(['preview_image' => null]);
    }
}
