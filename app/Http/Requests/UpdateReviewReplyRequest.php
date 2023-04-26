<?php

namespace App\Http\Requests;

use App\Enums\ValidationRules\ReviewReplyValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateReviewReplyRequest extends FormRequest
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
            'text' => ReviewReplyValidationRule::text->value
        ];
    }
}
