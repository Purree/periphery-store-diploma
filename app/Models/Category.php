<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    use HasFactory;
    use ModelWithParentTrait;

    protected $fillable = ['parent_id', 'title', 'meta_title', 'slug', 'image', 'description'];

    public $timestamps = false;
    protected $hidden = ['id'];

    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_category');
    }
}
