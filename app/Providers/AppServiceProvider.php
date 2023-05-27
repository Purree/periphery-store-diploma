<?php

namespace App\Providers;

use App\Models\Banner;
use App\Observers\BannerObserver;
use Filament\Facades\Filament;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        JsonResource::withoutWrapping();

        Filament::serving(function () {
            Filament::registerViteTheme('resources/css/filament.css');
        });

        Banner::observe(BannerObserver::class);
    }
}
