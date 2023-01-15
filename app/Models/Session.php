<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Session extends Model
{
    protected $appends = ['expires_at'];

    protected $keyType = 'string';

    public function isExpired(): bool
    {
        return $this->last_activity < Carbon::now()->subMinutes(config('session.lifetime'))->getTimestamp();
    }

    public function getExpiresAtAttribute(): string
    {
        return Carbon::createFromTimestamp($this->last_activity)->addMinutes(
            config('session.lifetime')
        )->toDateTimeString();
    }
}
