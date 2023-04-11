<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class);
    }

    public function show(Request $request, User $user): JsonResponse
    {
        return ResponseResult::success(
            new UserResource($user)
        );
    }

    public function showAuthenticated(Request $request): JsonResponse
    {
        return $this->show($request, Auth::user()?->query()->with('roles')->first());
    }

    public function update(UpdateUserRequest $request, User $user): JsonResponse
    {
        $user->update($request->validated());

        return $this->show($request, $user->with('roles')->first());
    }
}
