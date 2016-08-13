<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::auth();

Route::group(['prefix' => 'locales'], function () {

    Route::get('/{locale}.js', '\Someline\Support\Controllers\LocaleController@getLocaleJs');

    Route::get('/switch/{locale}', '\Someline\Support\Controllers\LocaleController@getSwitchLocale');

});

Route::group(['middleware' => 'auth'], function () {

    Route::get('/', function () {
        return redirect('users');
    });

    Route::get('users', 'UserController@getUserList');

});
