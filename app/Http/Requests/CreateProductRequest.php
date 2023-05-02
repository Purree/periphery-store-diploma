<?php

namespace App\Http\Requests;

use App\Enums\ValidationRules\ProductValidationRules;
use App\Models\Product;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class CreateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Gate::allows('create', Product::class);
    }

    public function rules(): array
    {
        return [
            'title' => 'required|'.ProductValidationRules::title->value,
            'metaTitle' => 'required|'.ProductValidationRules::metaTitle->value,
            'description' => 'required|'.ProductValidationRules::description->value,
            'previewImage' => ProductValidationRules::getPreviewImageValidationRule(),
            'price' => 'required|'.ProductValidationRules::price->value,
            'discount' => 'required|'.ProductValidationRules::discount->value,
            'quantity' => 'required|'.ProductValidationRules::quantity->value,
            'isAvailable' => 'nullable|'.ProductValidationRules::isAvailable->value
        ];
    }
}
