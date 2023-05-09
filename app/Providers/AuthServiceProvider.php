<?php

namespace App\Providers;

use App\Models\Banner;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use App\Models\ReviewReply;
use App\Models\UserAddress;
use App\Models\UserMobile;
use App\Models\UserName;
use App\Policies\BannerPolicy;
use App\Policies\CategoryPolicy;
use App\Policies\OrderPolicy;
use App\Policies\ProductPolicy;
use App\Policies\ReviewReplyPolicy;
use App\Policies\UserAddressPolicy;
use App\Policies\UserMobilePolicy;
use App\Policies\UserNamePolicy;
use App\Policies\UserPolicy;
use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        User::class => UserPolicy::class,
        Order::class => OrderPolicy::class,
        Banner::class => BannerPolicy::class,
        Product::class => ProductPolicy::class,
        Category::class => CategoryPolicy::class,
        UserName::class => UserNamePolicy::class,
        UserMobile::class => UserMobilePolicy::class,
        UserAddress::class => UserAddressPolicy::class,
        ReviewReply::class => ReviewReplyPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot(): void
    {
    }
}
