<?php

namespace Someline\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(\Someline\Repositories\Interfaces\UserRepository::class, \Someline\Repositories\Eloquent\UserRepositoryEloquent::class);
        //:end-bindings:
    }
}
