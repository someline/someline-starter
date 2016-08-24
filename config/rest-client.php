<?php

return array(

    /**
     * Rest client environment for selecting services
     * Available: 'production', 'dev'
     */
    'environment' => env('REST_CLIENT_ENV', 'production'),

    /**
     * Debug mode for showing logs
     */
    'debug_mode' => env('APP_DEBUG', false),

    /**
     * Access Token cache time
     * Set 0 to disable cache of access tokens
     */
    'oauth_tokens_cache_minutes' => 10,

    /**
     *  Guzzle Client Config
     */
    'guzzle_client_config' => [
        'timeout' => 29.0,      // Request timeout: 29 secs
    ],

    /**
     * Shared config for services
     */
    'shared_service_config' => [

        'headers' => [
            'User-Agent' => 'someline-testing/1.0',
        ],

        'oauth2_credentials' => [
            'client_id' => 'SomelineFvGXRmBv',
            'client_secret' => 'WFYBPbkOBv7hTby8vGL2SPOOq2GKYQdSIDGXcLsS',
        ],

        'oauth2_access_token_url' => 'oauth/access_token',

        'oauth2_grant_types' => [
            'client_credentials' => 'client_credentials',
            'password' => 'password',
        ],

    ],

    /**
     * Default Service
     */
    'default_service_name' => 'someline-starter',

    /**
     * Services
     */
    'services' => [

        // environment: dev
        'dev' => [

            'someline-starter' => [

                'base_uri' => 'http://dev.someline-starter.app/api/',

                'headers' => [
                    'Accept' => 'application/x.someline.v1+json',
                ],

            ],

        ],

        // environment: production
        'production' => [

            'someline-starter' => [

                'base_uri' => 'http://someline-starter.app/api/',

                'headers' => [
                    'Accept' => 'application/x.someline.v1+json',
                ],

            ],

        ],

    ],

);
