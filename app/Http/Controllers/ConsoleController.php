<?php

namespace Someline\Http\Controllers;


class ConsoleController extends BaseController
{

    public function getOauth()
    {
        return view('console.oauth');
    }

}