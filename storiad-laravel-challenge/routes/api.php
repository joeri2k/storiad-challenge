<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('create-book', [BookController::class, 'createBook']);
Route::get('get-books', [BookController::class, 'getBooks']);  
Route::post('edit-book', [BookController::class, 'editBook']);
Route::post('delete-book', [BookController::class, 'deleteBook']);
Route::post('book', [BookController::class, 'getBookById']);  