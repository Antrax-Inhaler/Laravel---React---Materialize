<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Api\V1\ProductController;
use App\Http\Controllers\PostController;

// Route::get('/', function () {
//     return Inertia::render('Home');
// });
Route::get('/', [PostController::class, 'index']);
Route::get('/about', function () {
    return inertia('About/About');
});
Route::resource('posts', PostController::class)->except('index');

Route::prefix('v1')->middleware(['api'])->group(function () {
    Route::get('/products', [ProductController::class, 'index']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/products/{product}', [ProductController::class, 'show']);
    Route::put('/products/{product}', [ProductController::class, 'update']);
    Route::delete('/products/{product}', [ProductController::class, 'destroy']);
});