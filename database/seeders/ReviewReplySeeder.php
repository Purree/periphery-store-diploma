<?php

namespace Database\Seeders;

use App\Models\ReviewReply;
use Illuminate\Database\Seeder;

class ReviewReplySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ReviewReply::factory(500)
            ->create();
    }
}
