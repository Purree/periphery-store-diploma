<?php

namespace App\Models;

use App\Enums\Structural\Statuses\TransactionStatus as TransactionStatusEnum;
use App\Helpers\EnumRelations\OrderTransactionStatusesRelation;
use App\Helpers\Transactions\TransactionInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\App;

class Transaction extends Model
{
    use SoftDeletes;

    protected $fillable = ['user_id', 'order_id', 'status_id', 'link'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(TransactionStatus::class, 'status_id');
    }

    public static function createTransactionFromOrder(Order $order): self
    {
        $statusesRelation = (new OrderTransactionStatusesRelation())->getRelations();
        $relatedWithOrderStatus = $statusesRelation[$order->status->name][0];

        $transactionStatus = $relatedWithOrderStatus ?
            TransactionStatusEnum::searchByName(
                $relatedWithOrderStatus
            ) : TransactionStatusEnum::new;

        return self::query()->create([
            'user_id' => $order->user_id,
            'order_id' => $order->id,
            'status_id' => TransactionStatus::getIdFromEnum($transactionStatus),
        ]);
    }

    public function getProvider(): TransactionInterface
    {
        return App::make(
            \App\Helpers\Transactions\TransactionInterface::class,
            ['transaction' => $this]
        );
    }
}
