<?php

namespace App\Enums\ValidationRules;

enum ReviewReplyValidationRule: string
{
    case text = 'required|string';
}
