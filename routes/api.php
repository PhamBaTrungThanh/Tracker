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
    Route::get('data', 'WorkController@allData');
    Route::get('/work/{work_id}/invoices', 'InvoiceController@fromWork');
    Route::get('/work/{work_id}/materials', 'MaterialController@fromWork');
    Route::get('invoice/{invoice_id}/payments', 'PaymentController@fromInvoice');
    Route::get('invoice/{invoice_id}/trackers', 'TrackerController@fromInvoice');
    Route::get('invoice/{invoice_id}/receives', 'ReceiveController@fromInvoice');

    Route::Resource('/user', 'UserController');

    Route::Resource('/provider', 'ProviderController');
    Route::Resource('/work', 'WorkController');
    Route::resource('/material', 'MaterialController');
    
    Route::resource('/invoice', 'InvoiceController');
    

    Route::resource('/payment', 'PaymentController');  
    Route::post('/payment/archive', 'PaymentController@archive');
    Route::resource('/tracker', 'TrackerController');
    Route::resource('/receive', 'ReceiveController');

    Route::get('/task/today', 'TaskController@today');
    Route::patch('/task/update', 'TaskController@massUpdate');
    Route::resource('/task', 'TaskController');

});