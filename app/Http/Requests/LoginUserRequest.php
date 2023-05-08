<?php

namespace App\Http\Requests;

use App\DataTransferObjects\LoginUserDTO;
use Illuminate\Foundation\Http\FormRequest;

class LoginUserRequest extends FormRequest implements DTOConvertibleInterface
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email',
            'password' => 'required',
            'remember' => 'boolean',
        ];
    }

    public function toDTO(): LoginUserDTO
    {
        return new LoginUserDTO(
            email: $this->get('email'),
            password: $this->get('password'),
            remember: $this->has('remember') && $this->get('remember'),
        );
    }
}
