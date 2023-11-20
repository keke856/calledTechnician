<?php

use App\Http\Controllers\Dashboard\ControllerIndex;
use App\Http\Controllers\Dashboard\ControllerRegisterCategory;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;


use App\Models\User;
use Database\Factories\UserFactory;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {

    $users = factory(User::class, 5)->create();


    return view('Dashboard.index');
});

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard',[ControllerIndex::class,'show'])->name('dashboard');
Route::get('/registerCategory',[ControllerRegisterCategory::class,'show'])->name('registerCategory');




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
