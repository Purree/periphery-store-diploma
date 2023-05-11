<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Resources\ReviewResource;
use App\Models\Review;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ReviewController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        // @TODO: Implement store() method.

        // 1 ЮЗЕР - 1 ПРОДУКТ - 1 ОТЗЫВ

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
                    ->with(['product', 'reviewer'])
                    ->with([
                        'replies' =>
                            static function (HasMany $reply) {
                                $reply
                                    ->with('replier')
                                    ->withCount('children')
                                    ->where('parent_id', null)
                                    ->get();
                            },
                    ])
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
        $review->delete();

        return ResponseResult::success();
    }
}
