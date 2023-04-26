<?php

namespace App\Http\Requests;

use App\Enums\ValidationRules\ReviewReplyValidationRule;
use App\Models\Review;
use App\Models\ReviewReply;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateReviewReplyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth('sanctum')->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'review_id' => 'required|int|exists:'.Review::class.',id',
            'parent_id' => [
                'nullable',
                'int',
                Rule::exists(ReviewReply::class, 'id')
                    ->where(function (Builder $query) {
                        return $query
                            ->where('review_id', $this->review_id);
                    }),
            ],
            'text' => ReviewReplyValidationRule::text->value,
        ];
    }
}
