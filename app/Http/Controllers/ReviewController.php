<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Requests\ManipulateReviewRequest;
use App\Http\Resources\ReviewResource;
use App\Models\Product;
use App\Models\Review;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ReviewController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Review::class.',product', 'review');
    }

    public function index(Request $request, Product $product): JsonResponse
    {
        return ResponseResult::success(
            ReviewResource::collection(
                Review::query()
                    ->where('product_id', $product->id)
                    ->with('reviewer')
                    ->where('user_id', '<>', $request->user()?->id)
                    ->withCount('replies')
                    ->orderBy('created_at', 'desc')
                    ->cursorPaginate(100)
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ManipulateReviewRequest $request, Product $product): JsonResponse
    {
        if ($product->userReview()->exists()) {
            return ResponseResult::error(
                ['review' => __('errors.reviewAlreadyExists')],
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }

        return $this->show(
            $product->userReview()->create(
                [
                    'user_id' => $request->user()->id,
                    'product_id' => $product->id,
                    ...$request->validated(),
                ]
            )
        );
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
                    ->withCount('replies')
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
    public function update(ManipulateReviewRequest $request, Review $review): JsonResponse
    {
        $review->update($request->validated());

        return $this->show($review);
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
