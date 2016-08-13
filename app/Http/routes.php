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

Route::get('locales/{locale}.js', function ($locale) {
    $content = 'window.Someline.locales = ' . json_encode(trans('app', [], 'messages', $locale));
    $response = response()->make($content);
    $response->header('Content-Type', 'application/javascript');
    $response->setPublic()
        ->setMaxAge(604800)
        ->setExpires(\Carbon\Carbon::now()->addDay(7));
    return $response;
});

Route::group(['middleware' => 'auth'], function () {

    Route::get('/', function () {
        return redirect('users');
    });

    Route::get('users', 'UserController@getUserList');

});
