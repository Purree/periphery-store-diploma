<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::name('transaction.confirm')->get('orders/{order}/transactions/confirm', static function () {
    throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException();
});

Route::get('/{any}', static function () {
    return view('app');
})->where('any', '^(?!api).*$');
