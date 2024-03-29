<?php

namespace App\Services;

use App\DataTransferObjects\UserData\UserDataIndexDTO;
use App\DataTransferObjects\UserData\UserDataStoreDTO;
use App\DataTransferObjects\UserData\UserDataUpdateDTO;
use App\Helpers\Results\ResponseResult;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class UserDataService
{
    /**
     * @param  class-string<JsonResource>  $resourceClass
     */
    public function __construct(private readonly string $resourceClass)
    {
    }

    /**
     * Display a listing of the resource.
     */
    public function index(UserDataIndexDTO $dto): JsonResponse
    {
        return ResponseResult::success(
            $this->resourceClass::collection(
                $dto->userDataModel::query()
                    ->where('user_id', $dto->user->id)
                    ->get()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserDataStoreDTO $dto): JsonResponse
    {
        return ResponseResult::success(
            $this->resourceClass::make(
                $dto->userDataBuilder->create($dto->params)
            )
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserDataUpdateDTO $dto): JsonResponse
    {
        // Doesn't common update because if user change data after ordering it will be incorrect in stored order
        return DB::transaction(function () use ($dto) {
            $this->destroy($dto->userData);
            return $this->store($dto->userDataUpdateDTO);
        });
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Model $userData): JsonResponse
    {
        $userData->delete();

        return ResponseResult::success();
    }
}
