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
        $request = request();
        $clientIp = $request->header('X-Client-Ip');
        if (empty($clientIp)) {
            $clientIp = $request->getClientIp(true);
        }
        return $clientIp;
    }

}

if (!function_exists('jwt_token')) {

    /**
     * @return string|null
     */
    function jwt_token()
    {
        $jwt_token = \Session::get('jwt_token');
        if (is_jwt_token_valid_for_refresh($jwt_token, true)
            || (empty($jwt_token) && \Auth::check())
        ) {
            $refreshed_token = refresh_jwt_token();
            if (!empty($refreshed_token)) {
                $jwt_token = $refreshed_token;
            }
        }
        return $jwt_token;
    }

}

if (!function_exists('refresh_jwt_token')) {

    /**
     * @return string|null
     */
    function refresh_jwt_token()
    {
        $jwt_token = null;
        if (\Auth::check()) {
            $jwt_token = \JWTAuth::fromUser(auth_user());
            \Session::put('jwt_token', $jwt_token);
        }
        return $jwt_token;
    }

}

if (!function_exists('is_jwt_token_expiring')) {

    /**
     * @param $token
     * @param bool $allowExpireRefresh
     * @return bool
     */
    function is_jwt_token_valid_for_refresh($token, $allowExpireRefresh = false)
    {
        $is_jwt_token_valid_for_refresh = false;
        try {
            $payload = \JWTAuth::getPayload($token);
            $exp = $payload->get('exp');
            $nbf = $payload->get('nbf');
            if ($exp > 0 && $nbf > 0) {
                $nowTime = \Carbon\Carbon::now('UTC');
                $expireTime = \Carbon\Carbon::createFromTimestampUTC($exp);
                $validTime = \Carbon\Carbon::createFromTimestampUTC($nbf);

                // if now time is after valid time
                if ($nowTime->gt($validTime)) {
                    $minutesAfterValid = $nowTime->diffInMinutes($validTime);
                    $minutesBeforeExpire = $nowTime->diffInMinutes($expireTime);
                    $totalValidLength = $validTime->diffInMinutes($expireTime);
                    $halfAmountOfMinutes = floor($totalValidLength / 2);
                    if ($minutesAfterValid >= $halfAmountOfMinutes) {
                        $is_jwt_token_valid_for_refresh = true;
                    }
                }
            }
        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            if ($allowExpireRefresh) {
                $is_jwt_token_valid_for_refresh = true;
            }
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
        }
        return $is_jwt_token_valid_for_refresh;
    }

}