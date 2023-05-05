<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class CartStatus extends Model
{
    public $timestamps = false;

    public function carts(): BelongsToMany
    {
        return $this->belongsToMany(Cart::class, 'carts');
    }
}
