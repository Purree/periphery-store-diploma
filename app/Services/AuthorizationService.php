<?php

namespace App\Services;

use App\DataTransferObjects\LoginUserDTO;
use App\DataTransferObjects\RegisterUserDTO;
use App\Enums\Structural\Role;
use App\Exceptions\InvalidArgumentException;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthorizationService
{
    /**
     * @throws InvalidArgumentException
     */
    public function login(LoginUserDTO $loginUserDTO): User
    {
        $attemptUser = User::query()->where('email', $loginUserDTO->email)->first();

        if (! ($attemptUser && Hash::check($loginUserDTO->password, $attemptUser->password))) {
            throw new InvalidArgumentException(__('Incorrect user or password.'));
        }

        Auth::login($attemptUser, $loginUserDTO->remember);

        return $attemptUser;
    }

    public function registration(RegisterUserDTO $registerUserDTO): void
    {
        $user = User::create([
            'name' => $registerUserDTO->name,
            'email' => $registerUserDTO->email,
            'password' => Hash::make($registerUserDTO->password),
        ]);

        $user->addRole(Role::customer);
    }

    public function logout(): void
    {
        $token = auth()->user()->currentAccessToken();
        if ($token && method_exists($token, 'delete')) {
            auth()->user()->currentAccessToken()->delete();
        }

        auth()->guard('web')->logout();
    }
}
