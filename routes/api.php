<?php

use Dingo\Api\Routing\Router;

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

// v1
$api->version('v1', [
    'namespace' => 'Someline\Api\Controllers',
    'middleware' => ['api']
], function (Router $api) {

    $api->group(['middleware' => ['auth:api']], function (Router $api) {

        // Rate: 100 requests per 5 minutes
        $api->group(['middleware' => ['api.throttle'], 'limit' => 100, 'expires' => 5], function (Router $api) {

            $api->get('users', 'UsersController@index');

            $api->post('users', 'UsersController@store');

            $api->get('users/me', 'UsersController@me');

            $api->get('users/{id}', 'UsersController@show');

            $api->put('users/{id}', 'UsersController@update');

            $api->delete('users/{id}', 'UsersController@destroy');

        });

    });


});