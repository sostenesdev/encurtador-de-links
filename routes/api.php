<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\LinksController;

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
    Route::post('refresh', [AuthController::class, 'refresh'])->middleware('auth:sanctum');
    Route::post('me', [AuthController::class, 'me'])->middleware('auth:sanctum');
    

});

    //links routes
    Route::get('links', [LinksController::class, 'list']);
    Route::get('links/{slug}', [LinksController::class, 'index']);
    Route::post('links', [LinksController::class, 'store']);
    Route::put('links/{id}', [LinksController::class, 'update']);
    Route::delete('links/{id}', [LinksController::class, 'destroy']);
    //route to list links
    Route::get('links', [LinksController::class, 'list']);

// Route::post('usuarios', [UsuarioController::class, 'index'])->middleware('auth:api');
Route::post('usuarios', [UsuarioController::class, 'index'])->middleware('auth:sanctum');