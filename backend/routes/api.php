<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// 認証不要のルート
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login',    [AuthController::class, 'login']);

// Google OAuth
Route::get('/auth/google',          [AuthController::class, 'googleRedirect']);
Route::get('/auth/google/callback', [AuthController::class, 'googleCallback']);

// X (Twitter) OAuth
Route::get('/auth/twitter',          [AuthController::class, 'twitterRedirect']);
Route::get('/auth/twitter/callback', [AuthController::class, 'twitterCallback']);

// 認証済みユーザーのみ
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me',      [AuthController::class, 'me']);

    // プロフィール
    Route::get('/profile',  [ProfileController::class, 'show']);
    Route::put('/profile',  [ProfileController::class, 'update']);
    Route::patch('/profile', [ProfileController::class, 'update']);
});
