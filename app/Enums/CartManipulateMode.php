<?php

namespace App\Enums;

enum CartManipulateMode
{
    use ArrayableEnumTrait;

    case decrease;
    case increase;
}
