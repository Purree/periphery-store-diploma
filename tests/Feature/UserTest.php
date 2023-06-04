<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    use RefreshDatabase;

    public function test_the_application_does_not_allow_to_log_in_to_a_nonExistent_account(): void
    {
        $userData =
            [
                'email' => 'unexisteduser@unexisted.ru',
                'password' => 'password',
            ];

        $response = $this->json('post', route('login'), $userData);

        $response->assertStatus(Response::HTTP_UNAUTHORIZED);
    }

    public function test_the_application_allows_to_create_an_account(): void
    {
        $userData =
            [
                'email' => 'newtestuser@test.ru',
                'name' => 'newtestuser',
                'password' => 'Newtestpassword1',
                'password_confirmation' => 'Newtestpassword1'
            ];

        $response = $this->json('post', route('register'), $userData);

        $response->assertStatus(Response::HTTP_CREATED);
    }
}
