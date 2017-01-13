@extends('angulr.layout.master')

@section('div.app.class', 'app-header-fixed app-aside-fixed app-aside-hidden app-desktop app-desktop-padder')

@section('app')

    @include('angulr.layout.parts.header_desktop')

    @include('angulr.layout.parts.content')

    @include('angulr.layout.parts.footer_desktop')

@endsection

@push('stylesheets')
<link rel="stylesheet" href="{{url(elixir("css/app.src.css"))}}" type="text/css"/>
@endpush

@push('scripts')
<script src="{{url(elixir("js/app.src.js"))}}"></script>
@endpush