<?php

namespace App\Helpers;

use App\Enums\StoredImagesFolderEnum;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Intervention\Image\Image as InterventionImage;
use Illuminate\Support\Facades\Log;

final class ImageFacade
{
    public InterventionImage $image;

    /**
     * The constructor is private, you need to call "make" method to create an instance.
     */
    private function __construct()
    {
    }

    public const DEFAULT_IMAGE_NAME = 'default.png';

    public static function getPassedOrDefaultImageUrl(
        ?string $imageName,
        ?StoredImagesFolderEnum $imageFolderEnum = null,
        bool $useFolderEnumForDefaultImage = false
    ): string {
        if ($imageName) {
            return self::getImageUrl($imageName, $imageFolderEnum);
        }

        return self::getImageUrl(
            self::DEFAULT_IMAGE_NAME,
            $useFolderEnumForDefaultImage ? $imageFolderEnum : null
        );
    }

    public static function getImageUrl(string $imageName, ?StoredImagesFolderEnum $imageFolderEnum = null): string
    {
        $imagePath = $imageFolderEnum?->value.$imageName;

        if (Storage::missing($imagePath)) {
            Log::error('File '.$imagePath.' not found.');
        }

        return Storage::url($imagePath);
    }

    public static function checkIsAPNG(string $file): bool
    {
        $imgBytes = file_get_contents($file);

        return !($imgBytes && str_contains(mb_substr($imgBytes, 0, mb_strpos($imgBytes, 'IDAT')), 'acTL'));
    }

    public static function make(string $file): self
    {
        $self = new self();
        $self->image = Image::make($file);

        return $self;
    }

    public function resize(int $width, int $height, bool $keepProportions = false): ImageFacade
    {
        $this->image->resize(
            $width,
            $height,
            $keepProportions ? static fn ($constraint) => $constraint->aspectRatio() : null
        );

        return $this;
    }

    public function encode(string $encoding, int $quality = 50): ImageFacade
    {
        $this->image->encode($encoding, $quality);

        return $this;
    }

    public function save(string $path, string $name = null, string $extension = null): string
    {
        $this->image->stream();
        $extension ??= $this->getExtension();
        $name ??= Str::random(40);

        $fullPath = $path.$name.'.'.$extension;

        Storage::disk('public')->put(
            $fullPath,
            ($this->image->getEncoded())
        );

        return $fullPath;
    }

    public function getExtension(): string
    {
        return $this->image->extension && $this->image->extension !== 'tmp' ?
            $this->image->extension :
            match ($this->image->mime()) {
                'image/png' => 'png',
                'image/gif' => 'gif',
                'image/webp' => 'webp',
                default => 'jpg',
            };
    }
}
