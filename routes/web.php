<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LinksController;

Route::get('/{any}', function () {
    return view('welcome'); // Substitua 'welcome' pelo nome do arquivo Blade que contém o contêiner React
})->where('any', '.*');
