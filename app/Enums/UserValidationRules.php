<?php

namespace App\Enums;

enum UserValidationRules: string
{
    case name = 'required|min:3|max:30';
}
