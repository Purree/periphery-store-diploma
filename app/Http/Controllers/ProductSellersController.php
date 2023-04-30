<?php

namespace App\Http\Controllers;

use App\Enums\Role;
use App\Helpers\Results\ResponseResult;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductSellersController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): JsonResponse
    {
        return ResponseResult::success(
            UserResource::collection(
                User::query()->whereHas(
                    'roles',
                    fn (Builder $builder) => $builder->where('roles.name', Role::seller->name)
                )->get()
            )
        );
    }
}
