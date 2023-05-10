<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Resources\ProductResource;
use App\Services\SalesHitsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class SalesHitsController extends Controller
{
    public function __construct(private readonly SalesHitsService $salesHitsService)
    {
    }

    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): JsonResponse
    {
        $salesHits = Cache::remember(
            'salesHits',
            600,
            fn () => $this->salesHitsService->getSalesHits()
        );

        return ResponseResult::success(
            ProductResource::collection($salesHits)
        );
    }
}
