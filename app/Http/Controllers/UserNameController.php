<?php

namespace App\Http\Controllers;

use App\Models\UserName;
use Illuminate\Http\Request;

class UserNameController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(UserName::class);
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
    public function update(Request $request, UserName $userName)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserName $userName)
    {
        //
    }
}
