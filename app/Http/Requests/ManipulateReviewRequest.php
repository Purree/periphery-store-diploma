<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ManipulateReviewRequest extends FormRequest
{
    use SnakedRequestKeysTrait;

    public function authorize(): bool
    {
        return Auth('sanctum')->check();
    }

    public function rules(): array
    {
        return [
            'isAnonymous' => 'required|boolean',
            'rating' => 'required|int|min:0|max:5',
            'advantages' => 'required|string',
            'disadvantages' => 'required|string',
            'comments' => 'required|string',
        ];
    }
}
