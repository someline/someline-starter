<?php

namespace Someline\Models\Foundation;

use Illuminate\Notifications\Notifiable;
use Someline\Model\Foundation\User as BaseUser;

class User extends BaseUser
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
        'gender', 'birthday', 'country', 'timezone', 'locale', 'username', 'phone_number', 'status',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
