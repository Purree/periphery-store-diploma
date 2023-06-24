<?php

namespace App\Enums;

enum CacheKeyEnum: string
{
    case banners = 'banners';
    case salesHits = 'salesHits';
    case transactionLink = 'transactionLink'; // Must be combined with the transaction id
}
