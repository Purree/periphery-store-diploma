<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', static function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                ->constrained('users');
            $table->foreignId('status_id')
                ->constrained('order_statuses');
            $table->string('token')
                ->unique()
                ->comment('Unique token that pass to the payment gateway');
            $table->foreignId('user_name_id')
                ->constrained('user_names');
            $table->foreignId('user_mobile_id')
                ->constrained('user_mobiles');
            $table->foreignId('user_address_id')
                ->constrained('user_addresses');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
