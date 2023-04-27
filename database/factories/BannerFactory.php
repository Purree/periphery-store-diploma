<?php

namespace Database\Factories;

use App\Enums\StoredImagesFolderEnum;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\App;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Banner>
 */
final class BannerFactory extends Factory
{
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
            'image' => $this->createBannerImage(),
        ];
    }

    private function createBannerImage(): string
    {
        $imageGenerator = App::make(
            \App\Helpers\ImageGenerator::class,
            ['imagesFolder' => StoredImagesFolderEnum::banners->value]
        );

        return $imageGenerator->getRandomImage();
    }
}
