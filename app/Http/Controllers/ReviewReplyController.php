<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Resources\ReviewReplyResource;
use App\Models\ReviewReply;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ReviewReplyController extends Controller
{
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
    public function update(Request $request, ReviewReply $reply): JsonResponse
    {
        // @TODO: Implement update() method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ReviewReply $reply): JsonResponse
    {
        // @TODO: Implement destroy() method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);
    }
}
