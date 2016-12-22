<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\Api\Controllers;

use Someline\Base\Api\Controllers\Controller;
use Someline\Models\Foundation\User;

abstract class BaseController extends Controller
{

    /**
     * @return User
     */
    public function getAuthUser()
    {
        return auth_user();
    }

}