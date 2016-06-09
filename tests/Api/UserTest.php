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

    public function testCreateUser()
    {
        $this->withOAuthTokenTypeClient();
        $this->post('users', [
            'name' => 'Abc',
            'email' => rand(100000, 999999) . 'abc@example.com',
            'password' => '12345678',
        ]);
        $this->printResponseData();
        $this->assertResponseOk();
    }

    public function testUpdateUser()
    {
        $this->withOAuthTokenTypeUser();
        $this->put('users/2', [
            'name' => 'Harry Potter',
        ]);
        $this->printResponseData();
        $this->assertResponseNoContent();
    }

    public function testDeleteUser()
    {
        $this->withOAuthTokenTypeUser();
        $this->delete('users/3');
        $this->printResponseData();
        $this->assertResponseNoContent();
    }

}
