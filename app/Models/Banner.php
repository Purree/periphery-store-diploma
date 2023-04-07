<?php

namespace App\Models;

use App\Enums\StoredImagesFolderEnum;
use App\Helpers\ImageFacade;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Banner extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $hidden = ['id'];
    public $fillable = [
        'name',
        'image',
        'url',
    ];

    public function delete(): void
    {
        $this->deleteImage();
        parent::delete();
    }

    public function deleteImage(): void
    {
        if ($this->image) {
            Storage::disk('public')->delete(
                $this->image,
            );
        }
    }

    public function updateImage(string $image): void
    {
        $this->image = ImageFacade::make($image)->save(StoredImagesFolderEnum::banners->value);
    }
}
