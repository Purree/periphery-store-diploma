<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    use HasFactory;
    use ModelWithParentTrait;

    protected $hidden = ['id'];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * REMEMBER!
     * If review "is_anonymous" column value equals 1 you need to hide user from public.
     *
     * @return BelongsTo
     */
    public function reviewer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
