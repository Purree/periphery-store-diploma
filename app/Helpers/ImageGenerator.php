<?php

namespace App\Helpers;

use Faker\Factory;
use Faker\Generator;
use Illuminate\Support\Facades\Storage;

final readonly class ImageGenerator
{
    private Generator $faker;

    public function __construct(private string $imagesFolder)
    {
        $this->faker = Factory::create();
    }

    public function getRandomImage(
        int $maxExistingImagesCount = 50,
        int $minImageWidth = 1,
        int $maxImageWidth = 1920,
        int $minImageHeight = 1,
        int $maxImageHeight = 1080
    ): string {
        $existingImages = Storage::disk('public')->files($this->imagesFolder);

        if (count($existingImages) < $maxExistingImagesCount) {
            return $this->createImage(
                $minImageWidth,
                $maxImageWidth,
                $minImageHeight,
                $maxImageHeight
            );
        }

        return $existingImages[array_rand($existingImages)];
    }

    public function createImage(
        int $minImageWidth = 1,
        int $maxImageWidth = 1920,
        int $minImageHeight = 1,
        int $maxImageHeight = 1080
    ): string {
        $imageWidth = $this->faker->numberBetween($minImageWidth, $maxImageWidth);
        $imageHeight = $this->faker->numberBetween($minImageHeight, $maxImageHeight);

        /** @psalm-suppress UndefinedInterfaceMethod */
        return $this->imagesFolder.$this->faker->image(
            Storage::disk('public')->path($this->imagesFolder),
            $imageWidth,
            $imageHeight,
            fullPath: false
        );
    }
}
