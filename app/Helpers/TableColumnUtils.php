<?php

namespace App\Helpers;

use Illuminate\Database\Eloquent\Model;

class TableColumnUtils
{
    public function __construct(
        protected Model $tableModel,
        protected string $columnName,
    ) {
    }

    public function fillWithUniqueValues(
        array $allPossibleValues
    ): void {
        $valuesReadyToInsert = $this->prepareValuesForInsert($allPossibleValues);
        $this->tableModel::insertOrIgnore($valuesReadyToInsert);
    }

    public function removeUnusedFields(
        array $allPossibleValues
    ): void {
        $deletedValues = $this->getDeletedValues($allPossibleValues);

        $this->tableModel::whereIn($this->columnName, $deletedValues)->delete();
    }

    protected function prepareValuesForInsert(array $values): array
    {
        return array_map(
            fn ($value) => [$this->columnName => $value],
            $values
        );
    }

    protected function getDeletedValues(array $allPossibleValues): array
    {
        $currentTableValues = $this->getColumnValues();
        return array_diff($currentTableValues, $allPossibleValues);
    }

    protected function getColumnValues(): array
    {
        return $this->tableModel::pluck($this->columnName)->toArray();
    }
}
