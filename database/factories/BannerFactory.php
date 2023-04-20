<?php

namespace Database\Factories;

use App\Enums\StoredImagesFolderEnum;
use App\Helpers\ImageGenerator;
use Illuminate\Database\Eloquent\Factories\Factory;

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
        return (new ImageGenerator(StoredImagesFolderEnum::banners->value))->getRandomImage();
    }
}
