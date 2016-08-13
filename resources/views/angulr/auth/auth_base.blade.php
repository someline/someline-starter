@extends('angulr.layout.master')

@section('div.app.class', 'app-header-fixed')

@section('app')
    <div class="container w-xxl w-auto-xs">
        <a href="https://www.someline.com" class="navbar-brand block m-t">
            <img src="https://www.someline.com/images/logo/someline-logo-brand@2x.png" style="max-height: 29px" alt="Someline"
                 title="Someline">
        </a>
        <div class="m-b-lg">
            @yield('content')
        </div>
        <div class="text-center">
            <p>
                <small class="text-muted">
                    @include('angulr.layout.parts.footer.copyright')
                </small>
            </p>
        </div>
    </div>
@endsection