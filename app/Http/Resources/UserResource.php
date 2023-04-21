<?php

namespace App\Http\Resources;

use App\Helpers\ImageFacade;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    use AdditionalConditionallyLoadsAttributesTrait;

    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'avatar' => $this->avatar ? ImageFacade::getImageUrl($this->avatar) : null,
            ...(Gate::allows('viewAdditionalResourceData', $this->resource) ? [
                'email' => $this->email,
                ...$this->getRolesIfItsLoaded()
            ] : []),
        ];
    }

    protected function getRolesIfItsLoaded(): array
    {
        if ($this->checkIsRelationLoaded('roles')) {
            return [
                'roles' => $this->roles->pluck('name'),
                'permissions' => $this->getPermissions()->pluck('name'),
            ];
        }

        return [];
    }
}
