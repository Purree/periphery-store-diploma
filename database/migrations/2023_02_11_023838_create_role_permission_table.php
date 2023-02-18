<?php

use Database\Seeders\RolePermissionSeeder;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('role_permission', static function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id')
                ->constrained('roles')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->foreignId('permission_id')
                ->constrained('permissions')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });

        $seeder = new RolePermissionSeeder();
        $seeder->run();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('role_permission');
    }
};
