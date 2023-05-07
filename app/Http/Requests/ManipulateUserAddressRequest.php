<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ManipulateUserAddressRequest extends FormRequest
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
            'address' => 'required|string'
        ];
    }
}
