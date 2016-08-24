<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Api\Controllers;

use Someline\Base\Api\Controllers\Controller;

abstract class BaseController extends Controller
{

    /**
     * @return \Someline\Models\Foundation\User
     */
    public function getAuthUser()
    {
        return auth_user();
    }

}