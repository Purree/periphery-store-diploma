<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

trait ModelWithParentTrait
{
    private function getParentColumnName(): string
    {
        return 'parent_id';
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(__CLASS__, $this->getParentColumnName());
    }

    protected function getAllParents(): Collection
    {
        $tableName = $this->getTable();

        $parentIds = collect(
            DB::select(
                "SELECT parent.id
                    FROM (SELECT @current_id                                                    AS _id,
                           (@previous_id := @current_id)                                        AS previous,
                           (SELECT @current_id := parent_id FROM {$tableName} WHERE id = _id)   AS parent_id,
                           @level := @level + 1                                                 AS lvl
                       FROM (SELECT @current_id := {$this->id}, @previous_id := 0, @level := 0) AS vars,
                           {$tableName}
                       WHERE @current_id <> 0
                           AND @current_id <> @previous_id)                                     AS child
                           JOIN {$tableName}                                                    AS parent
                       ON child._id = parent.id
                   ORDER BY child.lvl DESC"
            )
        )->pluck($this->primaryKey);

        return self::query()->whereIn($this->primaryKey, $parentIds)->get();
    }

    protected function parents(): Attribute
    {
        return Attribute::make(
            get: $this->getAllParents(...),
        );
    }

    public function children(): HasMany
    {
        return $this->hasMany(__CLASS__, $this->getParentColumnName());
    }
}
