<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Collection;

class Category extends Model
{
    public $timestamps = false;

    public function parent(): BelongsTo
    {
        return $this->belongsTo(__CLASS__, 'parent_id');
    }

    protected function getAllParents(): Collection
    {
        $parentIds = collect(
            DB::select(
                "SELECT parent_category.id
                    FROM (SELECT @current_id                                                    AS _id,
                           (@previous_id := @current_id)                                        AS previous,
                           (SELECT @current_id := parent_id FROM categories WHERE id = _id)     AS parent_id,
                           @level := @level + 1                                                 AS lvl
                       FROM (SELECT @current_id := {$this->id}, @previous_id := 0, @level := 0) AS vars,
                           categories
                       WHERE @current_id <> 0
                           AND @current_id <> @previous_id)                                     AS child_category
                           JOIN categories                                                      AS parent_category
                       ON child_category._id = parent_category.id
                   ORDER BY child_category.lvl DESC"
            )
        )->pluck('id');

        return self::whereIn('id', $parentIds)->get();
    }

    protected function parents(): Attribute
    {
        return Attribute::make(
            get: $this->getAllParents(...),
        );
    }

    public function children(): HasMany
    {
        return $this->hasMany(__CLASS__, 'parent_id');
    }

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_category');
    }
}
