<?php

namespace App\Filament\Resources\OrderResource\Widgets;

use App\Models\Order;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Card;
use Illuminate\Support\Facades\DB;

class OrderStatsOverview extends BaseWidget
{
    protected function getCards(): array
    {
        $orderStatusesCount = Order::query()
            ->join('order_statuses', 'status_id', '=', 'order_statuses.id')
            ->select('order_statuses.name', DB::raw('count(*) as total'))
            ->groupBy('status_id')
            ->pluck('total', 'name');

        $cards = $orderStatusesCount
            ->map(fn (int $statusCount, string $statusName) => Card::make(ucfirst($statusName), $statusCount));


        return $cards->toArray();
    }
}
