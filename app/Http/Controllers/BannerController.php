<?php

namespace App\Http\Controllers;

use App\Helpers\Results\ResponseResult;
use App\Http\Requests\CreateBannerRequest;
use App\Http\Requests\UpdateBannerRequest;
use App\Http\Resources\BannerResource;
use App\Models\Banner;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class BannerController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Banner::class);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $banners = Cache::remember('banners', 86400, static fn () => Banner::all());

        return ResponseResult::success(BannerResource::collection($banners));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateBannerRequest $request): JsonResponse
    {
        Log::info('User'.$request->user().'add new banner');

        $banner = new Banner();
        $banner->updateImage($request->image);
        $banner->name = $request->name;
        $banner->url = $request->url;
        $banner->save();

        return ResponseResult::success();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBannerRequest $request, Banner $banner): JsonResponse
    {
        Log::info("User {$request->user()} update {$banner->id} banner");
        if ($request->has('image')) {
            $banner->deleteImage();
            $banner->updateImage($request->image);
        }

        $banner->update($request->safe()->only(['name', 'url']));

        return ResponseResult::success();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Banner $banner): JsonResponse
    {
        Log::info("User {$request->user()} delete {$banner->id} banner");
        $banner->delete();

        return ResponseResult::success();
    }
}
