<?php

use App\Http\Controllers\AuthorizationController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\PopularCategoriesController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PromotedProductsWithDiscountController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserAvatarController;
use App\Http\Controllers\UserController;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */


Route::post('/language/{locale}', [LanguageController::class, 'changeLanguage'])->name('set-locale');

Route::post('/session', [AuthorizationController::class, 'login'])->name('login');
Route::post('/users', [AuthorizationController::class, 'registration'])->name('register');

Route::apiResource('/banners', BannerController::class)->except('show');

Route::apiResource('/reviews', ReviewController::class);

Route::name('products.')->middleware('can:viewAny,'.Product::class)
    ->prefix('products')->group(static function () {
        Route::get('/discounted', PromotedProductsWithDiscountController::class)->name('discounted');
    });
Route::apiResource('/products', ProductController::class);

Route::name('categories.')->middleware('can:viewAny,'.Category::class)
    ->prefix('categories')->group(static function () {
        Route::get('/popular', PopularCategoriesController::class)->name('popular');
    });

Route::middleware('auth:sanctum')->group(static function () {
    Route::delete('/session', [AuthorizationController::class, 'logout'])->name('logout');

    Route::name('users.')->prefix('users')->group(static function () {
        Route::get('/me', [UserController::class, 'showAuthenticated'])->name('me');

        Route::middleware('can:update,user')->prefix('/{user}')->group(static function () {
            Route::put('/', [UserController::class, 'update'])->name('update_main_user_data');

            Route::name('avatar.')->prefix('/avatar')->group(static function () {
                Route::post('/', [UserAvatarController::class, 'store'])->name('change');

                Route::delete('/', [UserAvatarController::class, 'destroy'])->name('delete');
            });
        });
    });
});
