<?php

namespace Database\Factories;

use App\Enums\StoredImagesFolderEnum;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Banner>
 */
final class BannerFactory extends Factory
{
    private const BANNER_IMAGES_FOLDER = StoredImagesFolderEnum::banners->value;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->text(75),
            'url' => $this->faker->boolean() ? null : $this->faker->url(),
            'image' => $this->createBannerImage(Storage::path('public\\' . self::BANNER_IMAGES_FOLDER)),
        ];
    }

    private function createBannerImage(string $path): string
    {
        $imageWidth = $this->faker->numberBetween(23, 1920);
        $imageHeight = $this->faker->numberBetween(33, 1080);
        return self::BANNER_IMAGES_FOLDER . $this->faker->image($path, $imageWidth, $imageHeight, fullPath:false);
    }
}
