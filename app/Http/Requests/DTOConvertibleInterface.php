<?php

namespace App\Http\Requests;

use App\DataTransferObjects\DTOInterface;

interface DTOConvertibleInterface
{
    public function toDTO(): DTOInterface;
}
