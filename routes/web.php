<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('welcome'); // Substitua 'welcome' pelo nome do arquivo Blade que contém o contêiner React
})->where('any', '.*');