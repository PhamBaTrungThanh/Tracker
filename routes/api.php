<?php

use Illuminate\Http\Request;

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


Route::prefix('v1')->middleware('auth:api')->namespace('Api_v1')->group(function() {

    Route::Resource('/user', 'UserController');

    Route::Resource('/provider', 'ProviderController');
    Route::Resource('/work', 'WorkController');
    Route::Resource('/category', 'CategoryController');
    Route::resource('/material', 'MaterialController');
    Route::resource('/invoice', 'InvoiceController');
    Route::resource('/payment', 'PaymentController');
    Route::post('/payment/archive', 'PaymentController@archive');
    Route::resource('/receive', 'ReceiveController');
});