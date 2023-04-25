<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Models\ReviewReply;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ReviewReplyController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create(): JsonResponse
    {
        // @TODO: Implement create() method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);

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
    public function show(ReviewReply $reviewReply): JsonResponse
    {
        // @TODO: Implement show() method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ReviewReply $reviewReply): JsonResponse
    {
        // @TODO: Implement edit() method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ReviewReply $reviewReply): JsonResponse
    {
        // @TODO: Implement update() method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ReviewReply $reviewReply): JsonResponse
    {
        // @TODO: Implement destroy() method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);

    }
}
