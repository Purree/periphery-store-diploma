<?php

use App\Http\Controllers\AuthorizationController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->group(static function () {
    Route::delete('/session', [AuthorizationController::class, 'logout'])->name('logout');

    Route::get('/users/me', [UserController::class, 'showAuthenticated'])->name('me');
});
