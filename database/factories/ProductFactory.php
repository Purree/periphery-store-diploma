<?php

namespace Database\Factories;

use App\Enums\StoredImagesFolderEnum;
use App\Helpers\ImageGenerator;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\App;

/**
 * @extends Factory<Product>
 */
final class ProductFactory extends Factory
{
    public function configure(): self
    {
        return $this->afterCreating(function (Product $product) {
            $productImagesCount = $this->faker->numberBetween(0, 5);

            for ($i = 0; $i < $productImagesCount; $i++) {
                $image = new ProductImage();
                $image->image = $this->createProductImage();
                $image->product()->associate($product);
                $image->save();
            }
        });
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $modelInstanceFactory = App::make(\Database\Factories\ModelInstanceFactory::class);

        return [
            'seller_id' => $modelInstanceFactory->createSeller()->id,
            'title' => $this->faker->text(75),
            'meta_title' => $this->faker->word(),
            'slug' => $this->faker->unique()->slug(),
            'description' => $this->faker->realText(),
            'SKU' => $this->faker->unique()->asciify('********************'),
            'price' => $this->faker->numberBetween(0, 9999999),
            'preview_image' => $this->faker->boolean ? $this->createProductImage() : null,
            'discount' => $this->faker->numberBetween(0, 100),
            'quantity' => $this->faker->randomNumber(),
            'is_available' => $this->faker->boolean(),
        ];
    }

    private function createProductImage(): string
    {
        $imageGenerator = App::make(
            \App\Helpers\ImageGenerator::class,
            ['imagesFolder' => StoredImagesFolderEnum::productImages->value]
        );

        return $imageGenerator->getRandomImage(
            maxImageWidth: 3840,
            maxImageHeight: 2160
        );
    }
}
