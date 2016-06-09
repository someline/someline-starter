<?php

include_once 'BaseApiTestCase.php';

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserTest extends BaseApiTestCase
{

    public function testGetAllUsers()
    {
        $this->withOAuthTokenTypeClient();
        $this->get('users');
        $this->printResponseData();
        $this->assertResponseOk();
    }

    public function testGetCurrentUser()
    {
        $this->withOAuthTokenTypeUser();
        $this->get('users/me');
        $this->printResponseData();
        $this->assertResponseOk();
    }

    public function testGetSingleUser()
    {
        $this->withOAuthTokenTypeUser();
        $this->get('users/1');
        $this->assertResponseOk();
    }

}
