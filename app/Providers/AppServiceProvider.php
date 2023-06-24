<?php

namespace App\Providers;

use App\Helpers\Transactions\TransactionInterface;
use App\Helpers\Transactions\YooKassaTransaction;
use App\Models\Banner;
use App\Models\Order;
use App\Observers\BannerObserver;
use App\Observers\OrderObserver;
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
        Order::observe(OrderObserver::class);

        $this->app->bind(TransactionInterface::class, YooKassaTransaction::class);
    }
}
