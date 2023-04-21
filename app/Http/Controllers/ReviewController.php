<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Resources\ReviewResource;
use App\Models\Review;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        return ResponseResult::success(
            ReviewResource::collection(
                Review::query()->orderBy('created_at', 'desc')
                    ->cursorPaginate(100)
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        // @TODO: Implement store() method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);
    }

    /**
     * Display the specified resource.
     */
    public function show(Review $review): JsonResponse
    {
        return ResponseResult::success(
            ReviewResource::make(
                Review::query()
                    ->with(['product', 'parent', 'children'])
                    ->firstWhere('id', $review->id)
            )
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Review $review): JsonResponse
    {
        // @TODO: Implement update() method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review): JsonResponse
    {
        // @TODO: Implement destroy() method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);
    }
}
