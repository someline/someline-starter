<?php

if (!function_exists('auth_user')) {

    /**
     * @return \Someline\Models\Foundation\User
     * @throws \Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException
     */
    function auth_user()
    {
        $user = app('Dingo\Api\Auth\Auth')->user(false);
        $user = !empty($user) ? $user : \Auth::user();
        if (!$user || !($user instanceof \Someline\Models\Foundation\User)) {
            throw new \Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException();
        }
        return $user;
    }

}

if (!function_exists('smart_get_client_ip')) {

    function smart_get_client_ip()
    {
        $ip = \Request::getClientIp(true);
        return $ip;
    }

}

if (!function_exists('jwt_token')) {

    /**
     * @return string|null
     */
    function jwt_token()
    {
        return \Session::get('jwt_token');
    }
    
}