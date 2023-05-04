<?php

namespace App\Http\Requests;

use App\Rules\NotApng;
use Illuminate\Foundation\Http\FormRequest;

class AddProductImagesRequest extends FormRequest
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
            'images' => 'array',
            'images.*' => ['image', 'mimes:png,jpeg,jpg', 'max:2048', new NotApng()]
        ];
    }
}
