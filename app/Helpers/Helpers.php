<?php

if (!function_exists('auth_user')) {

    /**
     * @param bool $throwException
     * @return null|\Someline\Model\Foundation\User|\Someline\Models\Foundation\User
     */
    function auth_user($throwException = true)
    {
        return current_auth_user($throwException);
    }

}

if (!function_exists('smart_mix')) {

    function smart_mix($path, $manifestDirectory = '', $supportHot = true)
    {
        $path = mix($path, $manifestDirectory);
        if (!$supportHot) {
            $hotUrl = '//localhost:8080';
            if (starts_with($path, $hotUrl)) {
                $path = str_replace($hotUrl, '', $path);
            }
        }
        return $path;
    }

}

if (!function_exists('rest_client')) {

    /**
     * @param null $service_name
     * @param null $debug_mode
     * @return \Someline\Rest\RestClient
     */
    function rest_client($service_name = null, $debug_mode = null)
    {
        return new \Someline\Rest\RestClient($service_name, $debug_mode);
    }

}