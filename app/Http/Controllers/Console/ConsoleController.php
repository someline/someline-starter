<?php

namespace Someline\Http\Controllers\Console;

use Someline\Http\Controllers\BaseController;

class ConsoleController extends BaseController
{

    public function getConsoleHome()
    {
        return view('console.index');
    }

    public function getOauth()
    {
        return view('console.oauth');
    }

}