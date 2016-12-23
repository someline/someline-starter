<?php

namespace Someline\Http\Controllers\Mobile;

use Someline\Http\Controllers\BaseController;

class MobileController extends BaseController
{

    public function getIndex()
    {
        return view('mobile.mobile_main');
    }

    public function getApp()
    {
        return view('mobile.mobile_app');
    }

}