<?php

namespace Tests\Api;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class BasicTest extends BaseApiTestCase
{

    public function testPhoneNumber()
    {
        $phoneNumberModel = phone_model_from("+6590123456", "SG");
        print_r($phoneNumberModel->toArray());

        // is valid number
        $this->assertTrue($phoneNumberModel->isValid());

        // is valid mobile number
        $this->assertTrue($phoneNumberModel->isMobileNumber());
    }

    public function testCountry()
    {

        // country list
        $localizedCountryList = \Someline\Model\Basic\CountryModel::getLocalizedCountryList();
        print_r($localizedCountryList);

        // country list
        $countryInfoIndexedList = \Someline\Model\Basic\CountryModel::getCountryInfoIndexedList();
        print_r($countryInfoIndexedList);

    }



}
