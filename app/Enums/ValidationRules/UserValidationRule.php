<?php

namespace App\Enums\ValidationRules;

enum UserValidationRule: string
{
    case name = 'required|min:3|max:30';
}
