<?php

namespace App\Http\Requests\UserData\Manipulate;

use App\DataTransferObjects\UserData\UserDataStoreDTO;
use App\Http\Requests\DTOConvertibleInterface;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class ManipulateUserNameRequest extends FormRequest implements DTOConvertibleInterface
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

    public function toDTO(): UserDataStoreDTO
    {
        return new UserDataStoreDTO(
            userDataBuilder: $this->user()->names(),
            params: $this->validated()
        );
    }
}
