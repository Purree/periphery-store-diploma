<?php

namespace App\Http\Requests;

use App\Enums\CartManipulateMode;
use App\Models\CartItem;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ManipulateCartItemsRequest extends FormRequest
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
            'quantity' => 'nullable|int|min:1|max:'.CartItem::MAX_ITEM_QUANTITY,
            'mode' => Rule::in(CartManipulateMode::getAllNames())
        ];
    }
}
