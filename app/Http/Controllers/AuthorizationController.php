<?php

namespace App\Http\Controllers;

use App\Exceptions\InvalidArgumentException;
use App\Helpers\Results\ResponseResult;
use App\Helpers\TwoFactorSessionKeyNames;
use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RecoveryPasswordRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Services\AuthorizationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AuthorizationController extends Controller
{
    protected AuthorizationService $authorizationService;

    public function __construct(AuthorizationService $authorizationService)
    {
        $this->authorizationService = $authorizationService;
    }

    public function login(LoginUserRequest $request): JsonResponse
    {
        try {
            $this->authorizationService->login(
                $request->toDTO()
            );

            return ResponseResult::success();
        } catch (InvalidArgumentException $exception) {
            return ResponseResult::error(['auth' => $exception->getMessage()], Response::HTTP_UNAUTHORIZED);
        }
    }

    public function registration(RegisterUserRequest $request): JsonResponse
    {
        $this->authorizationService->registration(
            $request->toDTO()
        );

        return ResponseResult::success(responseCode: Response::HTTP_CREATED);
    }

    public function logout(Request $request): JsonResponse
    {
        $this->authorizationService->logout();

        return ResponseResult::success();
    }

    public function verifyEmail(Request $request): JsonResponse
    {
        // @TODO: Implement verifyEmail() method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);
    }

    public function recoverPassword(Request $request): JsonResponse
    {
        // @TODO: Implement recoveryPassword() method.

        return ResponseResult::error('Method not implemented yet.', Response::HTTP_NOT_IMPLEMENTED);
    }
}
