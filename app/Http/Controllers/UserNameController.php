<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Requests\ManipulateUserNameRequest;
use App\Http\Resources\UserNameResource;
use App\Models\UserName;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserNameController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(UserName::class, 'name');
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        return ResponseResult::success(
            UserNameResource::collection(
                UserName::query()
                    ->where('user_id', $request->user()->id)
                    ->get()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ManipulateUserNameRequest $request): JsonResponse
    {
        return ResponseResult::success(
            UserNameResource::make(
                $request->user()->names()->create($request->validated())
            )
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ManipulateUserNameRequest $request, UserName $name): JsonResponse
    {
        $name->update($request->validated());

        return ResponseResult::success();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserName $name): JsonResponse
    {
        $name->delete();

        return ResponseResult::success();
    }
}
