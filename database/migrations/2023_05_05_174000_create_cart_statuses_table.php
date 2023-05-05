<?php

use Database\Seeders\CartStatusSeeder;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cart_statuses', static function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
        });

        $seeder = new CartStatusSeeder();
        $seeder->run();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart_statuses');
    }
};
