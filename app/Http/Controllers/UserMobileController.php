<?php

namespace App\Http\Controllers;

use App\Models\UserMobile;
use Illuminate\Http\Request;

class UserMobileController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(UserMobile::class);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserMobile $userMobile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserMobile $userMobile)
    {
        //
    }
}
