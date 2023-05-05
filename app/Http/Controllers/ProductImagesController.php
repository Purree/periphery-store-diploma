<?php

namespace App\Http\Controllers;

use App\Enums\StoredImagesFolderEnum;
use App\Helpers\ImageFacade;
use App\Helpers\Results\ResponseResult;
use App\Http\Requests\AddProductImagesRequest;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;

class ProductImagesController extends Controller
{
    public function store(AddProductImagesRequest $request, Product $product): JsonResponse
    {
        $newImages = $request->validated('images') ?? [];
        $currentImagesCount = $product->images->count();
        $newImagesCount = count($newImages);
        $maxImagesCount = 10;

        if ($newImagesCount + $currentImagesCount > $maxImagesCount) {
            return ResponseResult::error(
                [
                    'images' => __(
                        'errors.tooManyImages',
                        ['attribute' => $maxImagesCount]
                    ),
                ],
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }

        $productImages = [];

        foreach ($newImages as $image) {
            $savedImagePath = ImageFacade::make($image)
                ->resize(1024, 1024, true)
                ->save(StoredImagesFolderEnum::productImages->value);
            $productImages[] = ['product_id' => $product->id, 'image' => $savedImagePath];
        }
        $product->images()->insert($productImages);

        return ResponseResult::success();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product, ProductImage $image): JsonResponse
    {
        if (!$product->images->contains($image->id)) {
            Gate::authorize('delete', $image);
            return ResponseResult::error();
        }

        Storage::disk('public')->delete(
            $image->image,
        );

        $image->delete();

        return ResponseResult::success();
    }
}
