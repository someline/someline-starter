<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Providers;

use Dingo\Api\Auth\Auth;
use Illuminate\Support\ServiceProvider;
use Someline\Api\Auth\Provider\OAuth2;
use Someline\Models\Foundation\User;

class OAuthServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app[Auth::class]->extend('oauth', function ($app) {
            $provider = new OAuth2($app['oauth2-server.authorizer']->getChecker());

            $provider->setUserResolver(function ($id) {
                // Logic to return a user by their ID.
                $user = User::findOrFail($id);
                return $user;
            });

            $provider->setClientResolver(function ($id) {
                // Logic to return a client by their ID.
                /**
                 * Always return null for $user instance,
                 * otherwise will make $auth->user confusing
                 *
                 * @return null
                 */
                return null;
            });

            return $provider;
        });
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
