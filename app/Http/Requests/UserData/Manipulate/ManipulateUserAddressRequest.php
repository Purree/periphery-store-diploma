<?php

namespace App\Http\Requests\UserData\Manipulate;

use App\DataTransferObjects\UserData\UserDataStoreDTO;
use App\Http\Requests\DTOConvertibleInterface;
use Illuminate\Foundation\Http\FormRequest;

class ManipulateUserAddressRequest extends FormRequest implements DTOConvertibleInterface
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

    public function toDTO(): UserDataStoreDTO
    {
        return new UserDataStoreDTO(
            userDataBuilder: $this->user()->addresses(),
            params: $this->validated()
        );
    }
}
