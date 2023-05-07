<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ManipulateUserMobileRequest extends FormRequest
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
            'mobile' => 'required|string|min:12|max:12|regex:^(\+[0-9\s\-\+\(\)]*)$'
        ];
    }
}
