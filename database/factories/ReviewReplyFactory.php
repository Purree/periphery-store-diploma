<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\App;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ReviewReply>
 */
class ReviewReplyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $modelInstanceFactory = App::make(\Database\Factories\ModelInstanceFactory::class);
        $relatedReview = $modelInstanceFactory->createReview();

        return [
            'review_id' => $relatedReview->id,
            'parent_id' => $this->faker->boolean() ? $modelInstanceFactory->createReviewReply(
                $relatedReview
            )->id : null,
            'replier_id' => $modelInstanceFactory->createUser()->id,
            'text' => $this->faker->text(),
        ];
    }
}
