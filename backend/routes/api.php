<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\login;
use App\Http\Controllers\Api\AuthController;

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

// Route::post('/login', [login::class, 'loginUser']);

// Route::post('/registeruser', [login::class, 'registerUser']);

Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);


// Route::apiResource('posts', PostController::class)->middleware('auth:sanctum');
