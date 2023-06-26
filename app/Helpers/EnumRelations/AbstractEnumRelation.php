<?php

namespace App\Helpers\EnumRelations;

abstract class AbstractEnumRelation
{
    protected array $relations = [];

    abstract public function __construct();

    public function getRelations(): array
    {
        return $this->relations;
    }

    public function getFirstKeyOfValue(mixed $value): mixed
    {
        foreach ($this->getRelations() as $key => $relations) {
            if (in_array($value, $relations, true)) {
                return $key;
            }
        }

        return false;
    }

    protected function createRelation(\UnitEnum $bindingEnum, \UnitEnum ...$linkedEnums): void
    {
        foreach ($linkedEnums as $linkedEnum) {
            $this->relations[$bindingEnum->name][] = $linkedEnum->name;
        }
    }
}
