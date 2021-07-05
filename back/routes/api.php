<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register',[UserController::class,'register']);

Route::post('login',[UserController::class,'login']);

Route::post('update',[UserController::class,'update']);

Route::post('appointment',[UserController::class,'appointment']);

Route::post('services',[UserController::class,'services']);

Route::get('getAppointmentsForDoctor/{doctor}',[UserController::class,'getAppointmentsForDoctor']);

Route::get('getAppointmentsForGraphic/{doctor}',[UserController::class,'getAppointmentsForGraphic']);
