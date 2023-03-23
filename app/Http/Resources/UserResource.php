<?php

namespace App\Http\Resources;

use App\Helpers\ImageFacade;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
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
            ...(Gate::allows('view', $this->resource) ? [
                'email' => $this->email,
                ...$this->whenLoaded('roles', [
                    'roles' => $this->roles->pluck('name'),
                    'permissions' => $this->getPermissions()->pluck('name'),
                ]),
            ] : []),
        ];
    }
}
