<?php

namespace App\Observers;

use App\Enums\CacheKeyEnum;
use App\Models\Banner;
use Illuminate\Support\Facades\Cache;

class BannerObserver
{
    /**
     * Handle the Banner "created" event.
     */
    public function created(Banner $banner): void
    {
        Cache::forget(CacheKeyEnum::banners->value);
    }

    /**
     * Handle the Banner "updated" event.
     */
    public function updated(Banner $banner): void
    {
        $this->created($banner);
    }

    /**
     * Handle the Banner "deleted" event.
     */
    public function deleted(Banner $banner): void
    {
        $this->created($banner);
    }

    /**
     * Handle the Banner "restored" event.
     */
    public function restored(Banner $banner): void
    {
        $this->created($banner);
    }

    /**
     * Handle the Banner "force deleted" event.
     */
    public function forceDeleted(Banner $banner): void
    {
        $this->created($banner);
    }
}
