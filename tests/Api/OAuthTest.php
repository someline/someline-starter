<?php

namespace Tests\Api;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OAuthTest extends BaseApiTestCase
{

    public function testGetAccessTokenForTypePassword()
    {

        $this->post('oauth/token', [
            'client_id' => '3',
            'client_secret' => 'GHhWZFvak0iEJ5yh43hP8VVquuZJTp3fPgVIm6mF',
            'grant_type' => 'password',
            'username' => 'libern@someline.com',
            'password' => 'Abc12345',
            'scope' => '*',
        ]);
        $this->printResponseData();
        $this->assertResponseOk();

    }

}
