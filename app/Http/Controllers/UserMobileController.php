<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Requests\ManipulateUserMobileRequest;
use App\Http\Resources\UserMobileResource;
use App\Models\UserMobile;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserMobileController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(UserMobile::class, 'mobile');
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        return ResponseResult::success(
            UserMobileResource::collection(
                UserMobile::query()
                    ->where('user_id', $request->user()->id)
                    ->get()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ManipulateUserMobileRequest $request): JsonResponse
    {
        $request->user()->mobiles()->create($request->validated());

        return ResponseResult::success();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ManipulateUserMobileRequest $request, UserMobile $mobile): JsonResponse
    {
        $mobile->update($request->validated());

        return ResponseResult::success();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserMobile $mobile): JsonResponse
    {
        $mobile->delete();

        return ResponseResult::success();
    }
}
