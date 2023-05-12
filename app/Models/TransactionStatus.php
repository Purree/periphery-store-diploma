<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class TransactionStatus extends Model
{
    use StatusTrait;

    public $timestamps = false;

    public function transactions(): BelongsToMany
    {
        return $this->belongsToMany(Transaction::class, 'transactions');
    }
}
