<?php

namespace App\Http\Requests\UserData\Manipulate;

use App\DataTransferObjects\UserData\UserDataStoreDTO;
use App\Http\Requests\DTOConvertibleInterface;
use App\Http\Requests\SnakedRequestKeysTrait;
use Illuminate\Foundation\Http\FormRequest;

class ManipulateUserNameRequest extends FormRequest implements DTOConvertibleInterface
{
    use SnakedRequestKeysTrait;

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

    public function toDTO(): UserDataStoreDTO
    {
        return new UserDataStoreDTO(
            userDataBuilder: $this->user()->names(),
            params: $this->validated()
        );
    }
}
