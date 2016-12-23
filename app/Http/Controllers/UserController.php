<?php

namespace Someline\Http\Controllers;


class UserController extends BaseController
{

    public function getUserList()
    {
        return view('users.user_list');
    }

    public function getUserDetail($id)
    {
        return view('users.user_detail', [
            'user_id' => $id,
        ]);
    }

}