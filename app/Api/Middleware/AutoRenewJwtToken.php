<?php

namespace Someline\Api\Middleware;

use Closure;
use Tymon\JWTAuth\Middleware\BaseMiddleware;

class AutoRenewJwtToken extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // verify only if token present
        if ($token = $this->auth->setRequest($request)->getToken()) {
            // valid for refresh
            if (is_jwt_token_valid_for_refresh($token)) {
                $newToken = refresh_jwt_token();
                if (!empty($newToken)) {
                    // send the refreshed token back to the client
                    $response->headers->set('Authorization', $newToken);
                }
            }
        }

        return $response;
    }
}
