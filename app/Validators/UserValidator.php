<?php

namespace Someline\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

class UserValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'email' => 'required|email|unique:users',
            'name' => 'required',
            'password' => 'required',
        ],
        ValidatorInterface::RULE_UPDATE => [],
   ];

}