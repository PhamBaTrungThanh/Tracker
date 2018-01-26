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

    /* Custom routes */

    Route::get('/work/{work_id}/invoices', 'InvoiceController@fromWork');
    Route::Resource('/user', 'UserController');

    Route::Resource('/provider', 'ProviderController');
    Route::Resource('/work', 'WorkController');
    Route::resource('/material', 'MaterialController');

    Route::resource('/invoice', 'InvoiceController');
    

    Route::resource('/payment', 'PaymentController');  
    Route::post('/payment/archive', 'PaymentController@archive');
    Route::resource('/tracker', 'TrackerController');
    Route::resource('/receive', 'ReceiveController');
});