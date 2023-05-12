<?php

namespace App\Http\Requests;

use App\DataTransferObjects\CreateOrderDTO;
use App\Models\UserAddress;
use App\Models\UserMobile;
use App\Models\UserName;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Exists;

class CreateOrderRequest extends FormRequest implements DTOConvertibleInterface
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
            'userNameId' => $this->getUserDataValidationRules(UserName::class),
            'userMobileId' => $this->getUserDataValidationRules(UserMobile::class),
            'userAddressId' => $this->getUserDataValidationRules(UserAddress::class),
        ];
    }

    private function getUserDataValidationRules(string $modelString): array
    {
        return ['required', $this->isUserDataExists($modelString)];
    }

    /**
     * @param  class-string  $modelSting
     * @return Exists
     */
    private function isUserDataExists(string $modelSting): Exists
    {
        return Rule::exists($modelSting, 'id')
            ->where(
                fn (Builder $query) => $query->where('user_id', $this->user()->id)
            );
    }

    public function toDTO(): CreateOrderDTO
    {
        return new CreateOrderDTO(
            user: $this->user(),
            userNameId: $this->userNameId,
            userAddressId: $this->userAddressId,
            userMobileId: $this->userMobileId
        );
    }
}
