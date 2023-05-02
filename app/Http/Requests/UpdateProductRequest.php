<?php

namespace App\Http\Requests;

use App\Enums\ValidationRules\ProductValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
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
            'title' => 'nullable|'.ProductValidationRules::title->value,
            'metaTitle' => 'nullable|'.ProductValidationRules::metaTitle->value,
            'description' => 'nullable|'.ProductValidationRules::description->value,
            'previewImage' => ProductValidationRules::getPreviewImageValidationRule(),
            'price' => 'nullable|'.ProductValidationRules::price->value,
            'discount' => 'nullable|'.ProductValidationRules::discount->value,
            'quantity' => 'nullable|'.ProductValidationRules::quantity->value,
            'isAvailable' => 'nullable|'.ProductValidationRules::isAvailable->value
        ];
    }
}
