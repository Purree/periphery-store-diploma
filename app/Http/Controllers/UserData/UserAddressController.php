<?php

namespace App\Http\Controllers\UserData;

use App\DataTransferObjects\UserData\UserDataUpdateDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserData\Index\GetUserAddressesRequest;
use App\Http\Requests\UserData\Manipulate\ManipulateUserAddressRequest;
use App\Http\Resources\UserAddressResource;
use App\Models\UserAddress;
use App\Services\UserDataService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\App;

class UserAddressController extends Controller
{
    private readonly UserDataService $userDataService;

    public function __construct()
    {
        $this->authorizeResource(UserAddress::class, 'address');
        $this->userDataService = App::make(
            \App\Services\UserDataService::class,
            ['resourceClass' => UserAddressResource::class]
        );
    }

    /**
     * Display a listing of the resource.
     */
    public function index(GetUserAddressesRequest $request): JsonResponse
    {
        return $this->userDataService->index($request->toDTO());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ManipulateUserAddressRequest $request): JsonResponse
    {
        return $this->userDataService->store($request->toDTO());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ManipulateUserAddressRequest $request, UserAddress $address): JsonResponse
    {
        return $this->userDataService->update(
            new UserDataUpdateDTO(
                userData: $address,
                params: $request->toDTO()->params
            )
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserAddress $address): JsonResponse
    {
        return $this->userDataService->destroy($address);
    }
}
