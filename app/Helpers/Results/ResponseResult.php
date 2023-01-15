<?php

namespace App\Helpers\Results;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class ResponseResult implements ResultInterface
{
    protected function __construct()
    {
        // Makes class static
    }

    public static function success(mixed $returnValue = [], int $responseCode = Response::HTTP_OK): JsonResponse
    {
        return response()->json($returnValue, $responseCode);
    }

    public static function error(
        string|array $error = 'Some problems. Try again later.',
        int $errorCode = Response::HTTP_BAD_REQUEST
    ): JsonResponse {
        return response()->json(
            [
                'errors' => is_array($error) ? $error : ['server' => [$error]],
            ],
            $errorCode
        );
    }
}
