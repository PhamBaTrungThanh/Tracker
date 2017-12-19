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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->middleware('auth:api')->namespace('Api_v1')->group(function() {
    Route::get('works', 'DataController@works')->name('works');
    Route::get('work/{work}', 'DataController@workTrackers')->name('work_trackers');
    Route::get('/user', 'UserController@index')->name('user.index');

    Route::Resource('/category', 'CategoryController');
    Route::resource('/material', 'MaterialController');
    
});