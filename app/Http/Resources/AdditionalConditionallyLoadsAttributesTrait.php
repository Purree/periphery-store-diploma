<?php

namespace App\Http\Resources;

trait AdditionalConditionallyLoadsAttributesTrait
{
    /**
     * This is necessary because php automatically calls functions that are contained in the array passed as an argument
     *
     * @param  string  $relation
     * @return bool
     */
    private function checkIsRelationLoaded(string $relation): bool
    {
        return $this->whenLoaded($relation, true, false);
    }
}
