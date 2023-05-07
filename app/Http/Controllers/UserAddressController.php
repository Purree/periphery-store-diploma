<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Requests\ManipulateUserAddressRequest;
use App\Http\Resources\UserAddressResource;
use App\Models\UserAddress;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserAddressController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(UserAddress::class, 'address');
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        return ResponseResult::success(
            UserAddressResource::collection(
                UserAddress::query()
                    ->where('user_id', $request->user()->id)
                    ->get()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ManipulateUserAddressRequest $request): JsonResponse
    {
        $request->user()->addresses()->create($request->validated());

        return ResponseResult::success();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ManipulateUserAddressRequest $request, UserAddress $address): JsonResponse
    {
        $address->update($request->validated());

        return ResponseResult::success();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserAddress $address): JsonResponse
    {
        $address->delete();

        return ResponseResult::success();
    }
}
