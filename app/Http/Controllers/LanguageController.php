<?php

namespace App\Http\Controllers;

use App\Enums\AvailableLanguage;
use App\Helpers\Results\ResponseResult;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function changeLanguage(Request $request, AvailableLanguage $locale): JsonResponse
    {
        app()->setLocale($locale->value);
        $request->session()->put('locale', $locale->value);
        return ResponseResult::success();
    }
}
