<?php

namespace App\Http\Controllers\UserData;

use App\DataTransferObjects\UserData\UserDataUpdateDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserData\Index\GetUserMobilesRequest;
use App\Http\Requests\UserData\Manipulate\ManipulateUserMobileRequest;
use App\Http\Resources\UserMobileResource;
use App\Models\UserMobile;
use App\Services\UserDataService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\App;

class UserMobileController extends Controller
{
    private readonly UserDataService $userDataService;

    public function __construct()
    {
        $this->authorizeResource(UserMobile::class, 'mobile');
        $this->userDataService = App::make(
            \App\Services\UserDataService::class,
            ['resourceClass' => UserMobileResource::class]
        );
    }

    /**
     * Display a listing of the resource.
     */
    public function index(GetUserMobilesRequest $request): JsonResponse
    {
        return $this->userDataService->index($request->toDTO());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ManipulateUserMobileRequest $request): JsonResponse
    {
        return $this->userDataService->store($request->toDTO());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ManipulateUserMobileRequest $request, UserMobile $mobile): JsonResponse
    {
        return $this->userDataService->update(
            new UserDataUpdateDTO(
                userData: $mobile,
                userDataUpdateDTO: $request->toDTO()
            )
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserMobile $mobile): JsonResponse
    {
        return $this->userDataService->destroy($mobile);
    }
}
