<?php

use App\Http\Controllers\CalledController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\TesteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:sanctum')->post("/registerCalled",[CalledController::class,"store"]);
Route::middleware('auth:sanctum')->get("/lisCalled",[CalledController::class,"index"]);
Route::middleware('auth:sanctum')->get("/search",[CalledController::class,"search"]);
Route::middleware('auth:sanctum')->post("/userUpdate",[UserController::class,"update"]);
Route::middleware('auth:sanctum')->get("/userData",[UserController::class,"index"]);




Route::post("/login", function (Request $request) {
    $credentials = $request->only(['email', 'password']);

    if (Auth::attempt($credentials)) {

        $user = Auth::user();
        $token = $user->createToken('toke'); // Substitua 'scope1' e 'scope2' pelos escopos desejados
        return response()->json([
            'access_token' => $token->plainTextToken,
            'token_type' => 'Bearer',
        ]);
   
    } 
    
        return response()->json(['message' => 'Credenciais inválidas'], 401);
   
});
