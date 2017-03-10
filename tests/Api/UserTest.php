<?php

namespace Tests\Api;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Someline\Image\Models\SomelineImage;
use Someline\Image\SomelineImageService;
use Someline\Models\Foundation\User;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UserTest extends BaseApiTestCase
{

    public function testGetAllUsers()
    {
        $this->withOAuthTokenTypePassword();
        $this->getApi('users');
        $this->printResponseData();
        $this->assertJsonStructure([
            'data' => [
                '*' => [
                    'user_id',
                    'name',
                ],
            ]
        ]);
    }

    public function testGetCurrentUser()
    {
        $this->withOAuthTokenTypePassword();
        $this->getApi('users/me');
        $this->printResponseData();
        $this->assertResponseOk();
    }

    public function testGetSingleUser()
    {
        $this->withOAuthTokenTypePassword();
        $this->getApi('users/1');
        $this->assertResponseOk();
    }

    public function testCreateUser()
    {
        $this->withOAuthTokenTypePassword();
        $this->postApi('users', [
            'name' => 'Abc',
            'email' => rand(100000, 999999) . 'abc@example.com',
            'password' => '12345678',
        ]);
        $this->printResponseData();
        $this->assertResponseOk();
    }

    public function testUpdateUser()
    {
        $this->withOAuthTokenTypePassword();
        $this->putApi('users/2', [
            'name' => 'Harry Potter',
        ]);
        $this->printResponseData();
        $this->assertResponseNoContent();
    }

    public function testDeleteUser()
    {
        $user = \Someline\Models\Foundation\User::find(3);
        if (!$user) {
            $user = factory(\Someline\Models\Foundation\User::class, 1)->make();
            $user->user_id = 3;
            $user->save();
        }

        $this->withOAuthTokenTypePassword();
        $this->deleteApi('users/3');
        $this->printResponseData();
        $this->assertResponseNoContent();
    }

    public function testUserImages()
    {

//        $file = new UploadedFile('/Users/libern/Downloads/qrcode_for_gh_921e9710eb08_344.jpg', '12745840728709.jpg', null, null, null, true);
//
//        $somelineImageService = new SomelineImageService();
//        $somelineImage = $somelineImageService->handleUploadedFile($file);
////        print_r($somelineImage->toArray());
//
        $somelineImage = SomelineImage::find(1);

        /** @var User $user */
        $user = User::find(1);
//        $user->images()->save($somelineImage, ['is_main' => 1, 'type' => 'cover', 'data' => json_encode('a')]);
        $user->setAsMainImage($somelineImage);
//        print_r($user->getImages()->toArray());
//        print_r($user->getMainImage()->toArray());
//        print_r($user->getMainImages()->toArray());
//        print_r($user->getTypeImages('cover')->toArray());
//        print_r($user->getTypeMainImages('cover')->toArray());
    }

}
