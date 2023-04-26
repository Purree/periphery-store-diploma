<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Requests\CreateReviewReplyRequest;
use App\Http\Requests\UpdateReviewReplyRequest;
use App\Http\Resources\ReviewReplyResource;
use App\Models\ReviewReply;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\JsonResponse;

class ReviewReplyController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(ReviewReply::class, 'reply');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateReviewReplyRequest $request): JsonResponse
    {
        $createdReply = ReviewReply::query()
            ->create([...(array)$request->validated(), 'replier_id' => $request->user()->id]);

        return $this->show($createdReply);
    }

    /**
     * Display the specified resource.
     */
    public function show(ReviewReply $reply): JsonResponse
    {
        return ResponseResult::success(
            ReviewReplyResource::make(
                ReviewReply::query()
                    ->with(['review', 'replier'])
                    ->with([
                        'children' => static function (HasMany $answer) {
                            $answer
                                ->with('replier')
                                ->withCount('children')
                                ->get();
                        },
                    ])
                    ->firstWhere('id', $reply->id)
            )
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReviewReplyRequest $request, ReviewReply $reply): JsonResponse
    {
        $reply->update($request->validated());

        return $this->show($reply);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ReviewReply $reply): JsonResponse
    {
        $reply->delete();

        return ResponseResult::success();
    }
}