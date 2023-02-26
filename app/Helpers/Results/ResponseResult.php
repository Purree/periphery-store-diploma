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
        string|array $errors = ['Some problems. Try again later.'],
        int $errorCode = Response::HTTP_BAD_REQUEST
    ): JsonResponse {
        if (is_string($errors)) {
            $errors = [$errors];
        }
        $errors = self::pushAllKeylessErrorsToServerArray($errors);
        $errors = self::castAllErrorValuesToArray($errors);

        return response()->json(
            [
                'errors' => $errors,
            ],
            $errorCode
        );
    }

    protected static function pushAllKeylessErrorsToServerArray(array $errors): array
    {
        $result = [];
        foreach ($errors as $key => $error) {
            if (! is_int($key)) {
                $result[$key] = $error;

                continue;
            }

            $result['server'][] = $error;
        }

        return $result;
    }

    protected static function castAllErrorValuesToArray(array $errors): array
    {
        return array_map(static fn ($error) => is_array($error) ? $error : [$error], [...$errors]);
    }
}
