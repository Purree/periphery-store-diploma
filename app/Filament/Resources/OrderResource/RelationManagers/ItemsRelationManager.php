<?php

namespace App\Filament\Resources\OrderResource\RelationManagers;

use App\Filament\FormInputs\ProductInputs;
use App\Models\OrderItem;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Resources\Table;
use Filament\Tables;

class ItemsRelationManager extends RelationManager
{
    protected static string $relationship = 'items';

    protected static ?string $recordTitleAttribute = 'product_id';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('product_id')
                    ->relationship('product', 'title')
                    ->required(),
                Forms\Components\TextInput::make('sku')
                    ->required()
                    ->maxLength(255),
                ProductInputs::getPriceInput(),
                ProductInputs::getDiscountInput(),
                ProductInputs::getQuantityInput(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('product.title'),
                Tables\Columns\TextColumn::make('sku'),
                Tables\Columns\TextColumn::make(OrderItem::getPriceWithDiscountColumnName())
                    ->sortable(),
                Tables\Columns\TextColumn::make(OrderItem::getTotalPriceColumnName())
                    ->sortable(),
                Tables\Columns\TextColumn::make('price'),
                Tables\Columns\TextColumn::make('discount'),
                Tables\Columns\TextColumn::make('quantity'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }
}
