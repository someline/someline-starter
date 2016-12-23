<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth Routes
Auth::routes();

// Basic Routes
Route::get('/home', 'HomeController@index');

// Protected Routes
Route::group(['middleware' => 'auth'], function () {

    Route::get('/', function () {
        return redirect('users');
    });

    Route::get('users', 'UserController@getUserList');

    Route::get('users/{id}', 'UserController@getUserDetail');

});

// Console Routes
Route::group(['prefix' => 'console', 'middleware' => 'auth'], function () {

    Route::get('oauth', 'ConsoleController@getOauth');

    Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');

});

// Image Routes
Route::group(['prefix' => 'images'], function () {

    Route::post('/', 'ImageController@postImage');

    Route::get('/{name}', 'ImageController@showOriginalImage');

});

// Locale Routes
Route::group(['prefix' => 'locales'], function () {

    Route::get('/{locale}.js', '\Someline\Support\Controllers\LocaleController@getLocaleJs');

    Route::get('/switch/{locale}', '\Someline\Support\Controllers\LocaleController@getSwitchLocale');

});