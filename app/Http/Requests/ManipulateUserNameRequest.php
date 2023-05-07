<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class ManipulateUserNameRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth('sanctum')->check();
    }

    public function rules(): array
    {
        return [
            'firstName' => 'required',
            'middleName' => 'required',
            'lastName' => 'nullable',
        ];
    }

    public function validated($key = null, $default = null)
    {
        return collect(parent::validated($key, $default))->keyBy(
            fn ($value, $key) => Str::snake($key)
        )->toArray();
    }
}
