<?php

namespace Someline\Http\Controllers;


class ExampleController extends BaseController
{

    public function getDesktopExample()
    {
        return view('app.example.example');
    }

}