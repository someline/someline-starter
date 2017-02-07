@extends('app.layout.frame_without_aside')

@section('content')

    <div class="wrapper text-center m-t">
        <div class="h3 m-b">Someline</div>
        <span class="padder">
            <a target="_blank" href="https://www.someline.com/" class="btn btn-lg btn-default">Someline</a>
        </span>
        <span class="padder">
            <a target="_blank" href="https://starter.someline.com/" class="btn btn-lg btn-default">Someline Starter</a>
        </span>
        <span class="padder">
            <a target="_blank" href="https://starter.someline.com/docs" class="btn btn-lg btn-default">Someline Starter Docs</a>
        </span>
    </div>

    <div class="wrapper text-center m-t">
        <div class="h3 m-b">Starter</div>
        <span class="padder">
            <a target="_blank" href="{{ url('console') }}" class="btn btn-lg btn-default">Console</a>
        </span>
        <span class="padder">
            <a target="_blank" href="{{ url('m') }}" class="btn btn-lg btn-default">Mobile</a>
        </span>
        <span class="padder">
            <a target="_blank" href="{{ url('m/app') }}" class="btn btn-lg btn-default">Mobile App (SPA)</a>
        </span>
        <span class="padder">
            <a target="_blank" href="{{ url('console/logs') }}" class="btn btn-lg btn-default">Logs</a>
        </span>
    </div>

    <div class="wrapper text-center m-t">
        <div class="h3 m-b">App Example Pages</div>
        <span class="padder">
            <a target="_blank" href="{{ url('users') }}" class="btn btn-lg btn-default">Users Example (with Vue.js and Locales usage)</a>
        </span>
        <span class="padder">
            <a target="_blank" href="{{ url('desktop-example') }}" class="btn btn-lg btn-default">Desktop Example</a>
        </span>
        <span class="padder">
            <a target="_blank" href="{{ url('blank-example') }}" class="btn btn-lg btn-default">Blank Example</a>
        </span>
    </div>

    <div class="wrapper text-center m-t">
        <div class="h3 m-b">Angulr Theme</div>
        <span class="padder">
            <a target="_blank" href="https://themeforest.net/item/angulr-bootstrap-admin-web-app-with-angularjs/8437259?ref=Flatfull" class="btn btn-lg btn-default">Buy</a>
        </span>
        <span class="padder">
            <a target="_blank" href="http://flatfull.com/themes/angulr/angular/#/app/docs" class="btn btn-lg btn-default">Docs</a>
        </span>
        <span class="padder">
            <a target="_blank" href="http://flatfull.com/themes/angulr/html/" class="btn btn-lg btn-default">HTML Version</a>
        </span>
        <span class="padder">
            <a target="_blank" href="http://flatfull.com/themes/angulr/angular/#/app/dashboard-v1" class="btn btn-lg btn-default">Angulr Version</a>
        </span>
        <span class="padder">
            <a target="_blank" href="http://flatfull.com/themes/angulr/angular/#/music/home" class="btn btn-lg btn-default">Music Version</a>
        </span>
    </div>

@endsection