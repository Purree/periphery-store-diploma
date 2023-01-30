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
    public function show(Request $request, int $id): JsonResponse
    {
        return ResponseResult::success(
            new UserResource(User::where('id', $id)->first())
        );
    }

    public function showAuthenticated(Request $request): JsonResponse
    {
        return $this->show($request, Auth::user()->id);
    }

    public function update(UpdateUserRequest $request, User $user): JsonResponse
    {
        $user->name = $request->name;
        $user->save();

        return $this->show($request, $user->id);
    }
}
