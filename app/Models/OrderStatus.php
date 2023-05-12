<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class OrderStatus extends Model
{
    use StatusTrait;

    public $timestamps = false;

    public function orders(): BelongsToMany
    {
        return $this->belongsToMany(Transaction::class, 'transactions');
    }
}
