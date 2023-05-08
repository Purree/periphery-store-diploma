<?php

namespace App\Http\Requests\UserData\Manipulate;

use App\DataTransferObjects\UserData\UserDataStoreDTO;
use App\Http\Requests\DTOConvertibleInterface;
use Illuminate\Foundation\Http\FormRequest;

class ManipulateUserMobileRequest extends FormRequest implements DTOConvertibleInterface
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
            'mobile' => 'required|string|min:12|max:12|regex:/^(\+7[0-9]{10})$/'
        ];
    }

    public function toDTO(): UserDataStoreDTO
    {
        return new UserDataStoreDTO(
            userDataBuilder: $this->user()->mobiles(),
            params: $this->validated()
        );
    }
}
