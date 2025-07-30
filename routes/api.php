<?php

use App\Http\Controllers\Api\V1\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::prefix('v1')->group(function () {
    Route::apiResource('products', ProductController::class);
});
