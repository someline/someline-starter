<?php

namespace Someline\Http\Controllers;

use Someline\Base\Http\Controllers\Controller;
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
