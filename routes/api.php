<?php

use App\Http\Controllers\CalledController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ControllerAdmin;
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




// Route::prefix('admin')->middleware('is_admin')->group(function () {
//     Route::get('/dashboard',[ControllerAdmin::class,"index"])->name('dashboard.admin');

// });


Route::middleware(['auth:sanctum','access.administrador'])->prefix('admin')->group(function () {
    Route::get('/dashboard',[ControllerAdmin::class,"index"])->name('dashboard.admin');
    Route::post('/dashboard/update/called',[ControllerAdmin::class,"store"])->name('dashboard.admin.store');
    
});


Route::post("/login", function (Request $request) {
    $credentials = $request->only(['email', 'password']);

    if (Auth::attempt($credentials)) {

        $user = Auth::user();
        $token = $user->createToken('toke',[$user->type]); 
        return response()->json([
            'access_token' => $token->plainTextToken,
            'token_type' => 'Bearer',
            'type'=>$user->type,
            'userName' => $user->name
        ]);
   
    } 
    
        return response()->json(['message' => 'Credenciais inválidas'], 401);
   
});




