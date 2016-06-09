<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Api\Controllers;


use Dingo\Api\Routing\Helpers;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller;
use Someline\Api\Foundation\Validation\ValidatesRequests;

abstract class BaseController extends Controller
{
    use AuthorizesRequests, AuthorizesResources, DispatchesJobs, ValidatesRequests;
    use Helpers;

    /**
     * @return \Someline\Models\Foundation\User
     */
    public function getAuthUser()
    {
        return auth_user();
    }

    /**
     * @return mixed|null
     */
    public function getAuthUserId()
    {
        return $this->getAuthUser()->getUserId();
    }
}