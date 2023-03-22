<?php

namespace App\Http\Resources;

use App\Helpers\ImageFacade;
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
            $request->user()?->id === $this->id ? [
                'email' => $this->email,
                ...$this->whenLoaded('roles', [
                    'roles' => $this->roles->pluck('name'),
                    'permissions' => $this->getPermissions()->pluck('name'),
                ]),
            ] : [],
        ];
    }
}
