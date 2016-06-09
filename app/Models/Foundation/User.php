<?php

namespace Someline\Models\Foundation;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Prettus\Repository\Traits\TransformableTrait;

class User extends Authenticatable implements Transformable
{
    use TransformableTrait;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
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
