<?php

namespace Someline\Http\Controllers;

use Someline\Base\Http\Controllers\Controller;

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
