<?php

namespace App\Rules;

use App\Helpers\ImageFacade;
use Illuminate\Contracts\Validation\Rule;

class NotApng implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value): bool
    {
        return ImageFacade::checkIsAPNG($value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message(): string
    {
        return __('The image is animated png.');
    }
}
