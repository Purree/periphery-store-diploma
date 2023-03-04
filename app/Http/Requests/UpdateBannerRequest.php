<?php

namespace App\Http\Requests;

use App\Enums\ValidationRules\BannerValidationRules;
use App\Models\Banner;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class UpdateBannerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth('sanctum')->check() && Gate::allows('create', Banner::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => BannerValidationRules::name->value,
            'url' => BannerValidationRules::url->value,
            'image' => BannerValidationRules::image->value,
        ];
    }
}
