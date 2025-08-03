<?php

use App\Http\Controllers\Api\V1\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Api\V1\MessageController;

Route::prefix('v1')->group(function () {
    Route::apiResource('products', ProductController::class);
});
Route::prefix('v1')->middleware(['api'])->group(function () {
    Route::get('/materialize', [ProductController::class, 'index']);
    Route::post('/materialize', [ProductController::class, 'store']);
    Route::get('/materialize/{product}', [ProductController::class, 'show']);
    Route::put('/materialize/{product}', [ProductController::class, 'update']);
    Route::delete('/materialize/{product}', [ProductController::class, 'destroy']);
});
Route::prefix('api/v1')->middleware(['api'])->group(function () {
    Route::get('/products', [ProductController::class, 'index']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{product}', [ProductController::class, 'update']);
    Route::delete('/products/{product}', [ProductController::class, 'destroy']);
});
