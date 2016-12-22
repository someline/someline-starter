<?php

namespace Someline\Providers;

use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\ServiceProvider;
use Someline\Models\Foundation\User;

class PolymorphicServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Relation::morphMap([
            'User' => User::class,
//            'Comment' => Comment::class,
//            'Friend' => Friend::class,
        ]);
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
