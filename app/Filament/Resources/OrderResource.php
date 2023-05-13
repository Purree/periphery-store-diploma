<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OrderResource\Pages;
use App\Filament\Resources\OrderResource\RelationManagers\ItemsRelationManager;
use App\Filament\Resources\OrderResource\Widgets\OrderStatsOverview;
use App\Models\Order;
use App\Models\User;
use App\Models\UserAddress;
use App\Models\UserMobile;
use App\Models\UserName;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->label('User')
                    ->relationship('user', 'name')
                    ->reactive()
                    ->afterStateUpdated(function (callable $set) {
                        $set('user_name_id', null);
                        $set('user_address_id', null);
                        $set('user_mobile_id', null);
                    })
                    ->required(),
                Forms\Components\Select::make('user_name_id')
                    ->label('User name')
                    ->relationship('name', 'first_name')
                    ->options(function (callable $get) {
                        $user = User::find($get('user_id'));
                        if (!$user) {
                            return UserName::all()->pluck('first_name', 'id');
                        }

                        return $user->names->pluck('first_name', 'id')->toArray();
                    })
                    ->reactive(),
                Forms\Components\Select::make('user_address_id')
                    ->label('User address')
                    ->options(function (callable $get) {
                        $user = User::find($get('user_id'));
                        if (!$user) {
                            return UserAddress::all()->pluck('address', 'id');
                        }

                        return $user->addresses->pluck('address', 'id');
                    }),
                Forms\Components\Select::make('user_mobile_id')
                    ->label('User mobile')
                    ->options(function (callable $get) {
                        $user = User::find($get('user_id'));
                        if (!$user) {
                            return UserMobile::all()->pluck('mobile', 'id');
                        }

                        return $user->mobiles->pluck('mobile', 'id');
                    }),
                Forms\Components\Select::make('status_id')
                    ->relationship('status', 'name')
                    ->required(),
                Forms\Components\TextInput::make('token')
                    ->required()
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')->searchable(),
                Tables\Columns\TextColumn::make('status.name')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('name.first_name'),
                Tables\Columns\TextColumn::make('mobile.mobile')->searchable(),
                Tables\Columns\TextColumn::make('address.address')->searchable(),
                Tables\Columns\TextColumn::make('token'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime(),
                Tables\Columns\TextColumn::make('deleted_at')
                    ->dateTime(),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
                Tables\Actions\ForceDeleteBulkAction::make(),
                Tables\Actions\RestoreBulkAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            ItemsRelationManager::class
        ];
    }

    public static function getWidgets(): array
    {
        return [
            OrderStatsOverview::class
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
