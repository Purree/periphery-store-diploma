<?php

namespace App\Http\Requests\UserData\Index;

use App\DataTransferObjects\UserData\UserDataIndexDTO;
use App\Http\Requests\DTOConvertibleInterface;
use App\Models\UserName;
use Illuminate\Foundation\Http\FormRequest;

class GetUserNamesRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Auth('sanctum')->check();
    }

    public function toDTO(): UserDataIndexDTO
    {
        return new UserDataIndexDTO(
            user: $this->user(),
            userDataModel: UserName::class
        );
    }
}
