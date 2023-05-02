<?php

namespace App\Http\Requests;

use App\Models\Product;
use App\Rules\NotApng;
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
            'title' => 'required|string|max:255',
            'metaTitle' => 'required|string|max:255',
            'description' => 'required|string',
            'previewImage' => ['nullable', 'image', 'mimes:png,jpeg,jpg', 'max:2048', new NotApng()],
            'price' => 'required|int|min:0',
            'discount' => 'required|int|min:0|max:100',
            'quantity' => 'required|int|min:0',
            'isAvailable' => 'nullable|bool'
        ];
    }
}
