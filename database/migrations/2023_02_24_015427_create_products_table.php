<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', static function (Blueprint $table) {
            $table->id();
            $table->foreignId('seller_id')->constrained('users');
            $table->string('title', 75);
            $table->string('meta_title', 100)->nullable();
            $table->string('slug', 100);
            $table->text('description');
            $table->string('preview_image', 2048)->nullable();
            $table->string('SKU', 100)->unique();
            $table->decimal('price');
            $table->tinyInteger('discount')->default("0");
            $table->integer('quantity');
            $table->boolean('is_available')->default("1");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
