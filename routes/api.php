<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsuarioController;

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
    Route::post('refresh', [AuthController::class, 'refresh'])->middleware('auth:sanctum');
    Route::post('me', [AuthController::class, 'me'])->middleware('auth:sanctum');
    

});

// Route::post('usuarios', [UsuarioController::class, 'index'])->middleware('auth:api');
Route::post('usuarios', [UsuarioController::class, 'index'])->middleware('auth:sanctum');