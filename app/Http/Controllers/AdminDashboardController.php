<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminDashboardController extends Controller
{
    public function login(Request $request)
    {
        // Validação dos dados de login

        $credentials = $request->only('email', 'password');

        if (Auth::guard('adminDashboard')->attempt($credentials)) {
            $user = Auth::guard('adminDashboard')->user();
            

         
        }

        return response()->json(['message' => 'Unauthorized'], 401);
    }
}
