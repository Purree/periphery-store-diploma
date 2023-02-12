<?php

namespace App\Enums;

enum UserValidationRule: string
{
    case name = 'required|min:3|max:30';
}
