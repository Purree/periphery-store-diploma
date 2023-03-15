<?php

namespace App\Http\Controllers;

use App\Enums\StoredImagesFolderEnum;
use App\Helpers\ImageFacade;
use App\Helpers\Results\ResponseResult;
use App\Http\Requests\ChangeAvatarRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserAvatarController extends Controller
{
    public function store(ChangeAvatarRequest $request, User $user): JsonResponse
    {
        $this->destroy($request, $user);

        $image = ImageFacade::make($request->photo)
            ->encode('jpg')
            ->resize(1024, 1024, true);

        $user->avatar = $image->save(StoredImagesFolderEnum::profilePhotos->value);
        $user->save();

        return ResponseResult::success(['avatarPath' => (new UserResource($user))->toArray($request)['avatar']]);
    }

    public function destroy(Request $request, User $user): JsonResponse
    {
        if ($user->avatar) {
            Storage::disk('public')->delete(
                $user->avatar,
            );
        }

        $user->avatar = null;
        $user->save();

        return ResponseResult::success();
    }
}
