<?php

namespace App\Http\Requests;

use App\DataTransferObjects\RegisterUserDTO;
use App\Enums\UserValidationRules;
use Illuminate\Foundation\Http\FormRequest;

class RegisterUserRequest extends FormRequest
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
            'name' => UserValidationRules::name->value,
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ];
    }

    public function toDTO(): RegisterUserDTO
    {
        return new RegisterUserDTO(
            name: $this->name,
            email: $this->email,
            password: $this->password
        );
    }
}
