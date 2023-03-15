<?php

namespace App\Enums;

enum StoredImagesFolderEnum: string
{
    case banners = 'banners/';
    case profilePhotos = 'profile-photos/';
    case productImages = 'product-images/';
    case categoryImages = 'category-images/';
}
