<?php

namespace App\Http\Controllers\UserData;

use App\DataTransferObjects\UserData\UserDataUpdateDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserData\Index\GetUserNamesRequest;
use App\Http\Requests\UserData\Manipulate\ManipulateUserNameRequest;
use App\Http\Resources\UserNameResource;
use App\Models\UserName;
use App\Services\UserDataService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\App;

class UserNameController extends Controller
{
    private readonly UserDataService $userDataService;

    public function __construct()
    {
        $this->authorizeResource(UserName::class, 'name');
        $this->userDataService = App::make(
            \App\Services\UserDataService::class,
            ['resourceClass' => UserNameResource::class]
        );
    }

    /**
     * Display a listing of the resource.
     */
    public function index(GetUserNamesRequest $request): JsonResponse
    {
        return $this->userDataService->index($request->toDTO());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ManipulateUserNameRequest $request): JsonResponse
    {
        return $this->userDataService->store($request->toDTO());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ManipulateUserNameRequest $request, UserName $name): JsonResponse
    {
        return $this->userDataService->update(
            new UserDataUpdateDTO(
                userData: $name,
                params: $request->toDTO()->params
            )
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserName $name): JsonResponse
    {
        return $this->userDataService->destroy($name);
    }
}
