<?php

namespace Someline\Http\Controllers\Console;

use Someline\Http\Controllers\BaseController;

class UserController extends BaseController
{

    public function getUserList()
    {
        return view('console.users.user_list');
    }

}