<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Transaction Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for transaction services such
    | as yoo kassa and more.
    |
     */

    'yookassa' => [
        'shop_id' => env('YOOKASSA_SHOP_ID'),
        'secret' => env('YOOKASSA_SECRET')
    ],

];
