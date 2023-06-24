<?php

use App\Http\Controllers\AuthorizationController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\CartItemController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CategoryParentController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PopularCategoriesController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImagesController;
use App\Http\Controllers\ProductPreviewController;
use App\Http\Controllers\ProductSellersController;
use App\Http\Controllers\PromotedProductsWithDiscountController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ReviewReplyController;
use App\Http\Controllers\SalesHitsController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UpdateProductCategoriesController;
use App\Http\Controllers\UserAvatarController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserData\UserAddressController;
use App\Http\Controllers\UserData\UserMobileController;
use App\Http\Controllers\UserData\UserNameController;
use App\Http\Controllers\UserProductsController;
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
Route::apiResource('/categories', CategoryController::class)->only('index');


Route::name('products.')->middleware('can:viewAny,'.Product::class)
    ->prefix('products')->group(static function () {
        Route::apiResource('/reviews', ReviewController::class)->except(['index', 'store']);
        Route::apiResource('/reviews/replies', ReviewReplyController::class)->except('index');

        Route::get('/discounted', PromotedProductsWithDiscountController::class)->name('discounted');
        Route::get('/hits', SalesHitsController::class)->name('sales-hits');
        Route::get('/sellers', ProductSellersController::class)->name('sellers');

        Route::prefix('{product}')->group(static function () {
            Route::delete('/preview', [ProductPreviewController::class, 'destroy'])
                ->middleware('can:update,product');

            Route::apiResource('/reviews', ReviewController::class)->only(['index', 'store']);

            Route::middleware(['can:update,product', 'auth:sanctum'])->group(function () {
                Route::apiResource('/images', ProductImagesController::class)
                    ->only(['store', 'destroy']);
                Route::put('/categories', UpdateProductCategoriesController::class)
                    ->name('categories.update');
            });
        });
    });
Route::apiResource('/products', ProductController::class);

Route::name('categories.')->middleware('can:viewAny,'.Category::class)
    ->prefix('categories')->group(static function () {
        Route::get('/popular', PopularCategoriesController::class)->name('popular');
        Route::get('{category:slug}/parents', CategoryParentController::class)->name('parents');
    });

Route::middleware('auth:sanctum')->group(static function () {
    Route::delete('/session', [AuthorizationController::class, 'logout'])->name('logout');

    Route::name('users.')->prefix('users')->group(static function () {
        Route::get('/me', [UserController::class, 'showAuthenticated'])->name('me');
        Route::get('/products', UserProductsController::class)->name('products');
        Route::apiResource('/names', UserNameController::class)->except('show');
        Route::apiResource('/mobiles', UserMobileController::class)->except('show');
        Route::apiResource('/addresses', UserAddressController::class)->except('show');

        Route::middleware('can:update,user')->prefix('/{user}')->group(static function () {
            Route::put('/', [UserController::class, 'update'])->name('update_main_user_data');

            Route::name('avatar.')->prefix('/avatar')->group(static function () {
                Route::post('/', [UserAvatarController::class, 'store'])->name('change');

                Route::delete('/', [UserAvatarController::class, 'destroy'])->name('delete');
            });
        });
    });

    Route::apiResource('orders', OrderController::class)->except(['destroy', 'update']);
    Route::name('orders.')->prefix('/orders/{order}')->middleware('can:view,order')
        ->group(static function () {
            Route::get('transactions', [TransactionController::class, 'show']);
            Route::put('transactions', [TransactionController::class, 'update']);
            Route::delete('transactions', [TransactionController::class, 'destroy']);
        });

    Route::name('carts.')->prefix('carts')->group(static function () {
        Route::name('items.')->prefix('items')->group(static function () {
            Route::get('', [CartItemController::class, 'index'])->name('index');
            Route::name('product')->prefix('{product}')->middleware('can:buy,product')->group(static function () {
                Route::put('', [CartItemController::class, 'update'])->name('update');
                Route::delete('', [CartItemController::class, 'destroy'])->name('destroy');
            });
        });
    });
});
