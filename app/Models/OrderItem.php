<?php

namespace App\Models;

use App\Helpers\PriceWithDiscountTrait;
use App\Helpers\TotalPriceTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderItem extends Model
{
    use PriceWithDiscountTrait;
    use TotalPriceTrait;

    protected $casts = [
        'price' => 'float'
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
