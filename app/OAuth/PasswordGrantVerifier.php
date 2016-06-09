<?php
/**
 * Created for someline-starter.
 * User: Libern
 */

namespace Someline\OAuth;


use Illuminate\Support\Facades\Auth;

class PasswordGrantVerifier
{
    public function verify($username, $password)
    {
        $credentials = [
            'email'    => $username,
            'password' => $password,
        ];

        if (Auth::once($credentials)) {
            return Auth::user()->user_id;
        }

        return false;
    }
}