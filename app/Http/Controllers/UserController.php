<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

final class UserController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class);
    }

    public function show(Request $request, User $user): JsonResponse
    {
        return ResponseResult::success(
            UserResource::make($user)
        );
    }

    public function showAuthenticated(Request $request): JsonResponse
    {
        /** @psalm-suppress UndefinedInterfaceMethod, ArgumentTypeCoercion */
        return $this->show(
            $request,
            User::query()
                ->with($this->getAllUserRelations())
                ->firstWhere('id', $request->user()?->id)
        );
    }

    public function update(UpdateUserRequest $request, User $user): JsonResponse
    {
        $user->update($request->validated());

        /** @psalm-suppress ArgumentTypeCoercion */
        return $this->show(
            $request,
            User::query()
                ->with($this->getAllUserRelations())
                ->firstWhere('id', $user->id)
        );
    }

    private function getAllUserRelations(): array
    {
        return ['roles', 'addresses', 'mobiles', 'names'];
    }
}
