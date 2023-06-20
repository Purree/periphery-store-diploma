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

    protected function createRelation(\UnitEnum $bindingEnum, \UnitEnum ...$linkedEnums): void
    {
        foreach ($linkedEnums as $linkedEnum) {
            $this->relations[$bindingEnum->name][] = $linkedEnum->name;
        }
    }
}
