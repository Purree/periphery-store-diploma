<?php

namespace App\Models;

use App\Enums\SearchableEnumTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class TransactionStatus extends Model
{
    use StatusTrait;
    use SearchableEnumTrait;

    public $timestamps = false;

    public function transactions(): BelongsToMany
    {
        return $this->belongsToMany(Transaction::class, 'transactions');
    }
}
