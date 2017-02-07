@extends('mobile.layout.master')

@section('div.app.class', 'app-header-fixed app-aside-fixed app-aside-hidden')

@section('app')

    @include('mobile.layout.parts.header')

    @include('mobile.layout.parts.content')

    @include('mobile.layout.parts.footer')

@endsection