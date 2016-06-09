<?php

include_once 'BaseApiTestCase.php';

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OAuthTest extends BaseApiTestCase
{

    public function testGetAccessTokenWithoutEssentialParams()
    {
        $this->postRequestAccessToken('client_credentials', [])
            ->assertResponseStatus(self::HTTP_BAD_REQUEST);
    }

    public function testGetAccessTokenByClientCredentials()
    {
        $this->postRequestAccessToken('client_credentials',
            array_merge($this->getClientData(), [
            ]))
            ->seeJsonStructure([
                'access_token',
                'token_type',
                'expires_in',
            ]);
    }

    public function testGetAccessTokenByPasswordWithInvalidCredentials()
    {
        $this->postRequestAccessToken('password',
            array_merge($this->getClientData(), [
                'username' => 'demouser',
                'password' => 'randompassword',
            ]))
            ->assertResponseStatus(self::HTTP_UNAUTHORIZED);
    }

    public function testGetAccessTokenByPassword()
    {
        $this->postRequestAccessToken('password',
            array_merge($this->getClientData(), $this->getOAuthUserCredentialsData()))
            ->printResponseOriginContent()
            ->seeJsonStructure([
                'access_token',
                'token_type',
                'expires_in',
                'refresh_token',
            ]);
    }

}
