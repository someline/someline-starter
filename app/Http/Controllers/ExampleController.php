<?php

namespace Someline\Http\Controllers;


class ExampleController extends BaseController
{

    public function getDesktopExample()
    {
        return view('app.example.example');
    }

    public function getBlankExample()
    {
        return view('app.example.blank');
    }

}