<?php
/**
 * Created by PhpStorm.
 * User: Libern
 * Date: 22/7/16
 * Time: 17:39
 */

namespace Someline\Http\Controllers;


class UserController extends BaseController
{

    public function getUserList()
    {
        return view('users.user_list');
    }

}