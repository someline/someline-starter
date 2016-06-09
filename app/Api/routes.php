<?php

/*
|--------------------------------------------------------------------------
| Application API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// v1
$api->version('v1', [
    'namespace' => 'Someline\Api\Controllers',
    'middleware' => ['api']
], function (\Dingo\Api\Routing\Router $api) {

    // Request Token for OAuth
    $api->post('oauth/access_token', function () {
        return \Response::json(\Authorizer::issueAccessToken());
    });

    /**
     * @oauth_type client_credentials
     */
    $api->group(['middleware' => ['api-auth:client'], 'providers' => ['oauth', 'jwt']], function (\Dingo\Api\Routing\Router $api) {
        // Rate: 100 requests per 5 minutes
        $api->group(['middleware' => ['api.throttle'], 'limit' => 100, 'expires' => 5], function (\Dingo\Api\Routing\Router $api) {

            $api->get('users', 'UserController@index');

        });
    });

    /**
     * @oauth_type password
     */
    $api->group(['middleware' => ['api-auth:user'], 'providers' => ['oauth', 'jwt']], function (\Dingo\Api\Routing\Router $api) {

        // Rate: 100 requests per 5 minutes
        $api->group(['middleware' => ['api.throttle'], 'limit' => 100, 'expires' => 5], function (\Dingo\Api\Routing\Router $api) {

            $api->get('users/me', 'UserController@me');

            $api->get('users/{id}', 'UserController@show');

        });

    });


});