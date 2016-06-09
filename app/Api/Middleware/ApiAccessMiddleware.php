<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Api\Middleware;

use Closure;
use Dingo\Api\Exception\ResourceException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use League\OAuth2\Server\Exception\InvalidCredentialsException;
use League\OAuth2\Server\Exception\InvalidRequestException;
use League\OAuth2\Server\Exception\OAuthException;
use Prettus\Validator\Exceptions\ValidatorException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class ApiAccessMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     * @throws HttpException
     */
    public function handle($request, Closure $next)
    {
        try {
            $response = $next($request);

            // Was an exception thrown? If so and available catch in our middleware
            if (isset($response->exception) && $response->exception) {
                throw $response->exception;
            }

            return $response;
        } catch (OAuthException $e) {
            $message = env('API_DEBUG') ? $e->getMessage() : null;
            throw new HttpException($e->httpStatusCode, $message, $e, $e->getHttpHeaders());
        } catch (ValidatorException $e) {
            $messageBag = $e->getMessageBag();
            throw new ResourceException($messageBag->first(), $messageBag->all());
        } catch (ModelNotFoundException $e) {
            throw new NotFoundHttpException('No results found.');
        }
    }
}
