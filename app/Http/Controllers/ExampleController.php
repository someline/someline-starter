<?php

namespace Someline\Http\Controllers;


class ExampleController extends BaseController
{

    public function getIndexExample()
    {
        return view('app.example.index');
    }

    public function getDesktopExample()
    {
        return view('app.example.desktop');
    }

    public function getBlankExample()
    {
        return view('app.example.blank');
    }

}