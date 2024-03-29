<?php

namespace App\Http\Requests;

use App\Enums\ValidationRules\UserValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return Auth('sanctum')->check();
    }

    public function rules(): array
    {
        return [
            'name' => UserValidationRule::name->value,
        ];
    }
}
