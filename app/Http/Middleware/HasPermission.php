<?php

namespace App\Http\Middleware;

use App\Helpers\Results\ResponseResult;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HasPermission
{
    public function handle(Request $request, Closure $next, string $permission): Response
    {
        if (! $request->user()?->hasPermission($permission)) {
            return ResponseResult::error(__('Forbidden'));
        }

        return $next($request);
    }
}
