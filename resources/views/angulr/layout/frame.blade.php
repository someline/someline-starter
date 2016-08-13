@extends('angulr.layout.master')

@section('div.app.class', 'app-header-fixed app-aside-fixed')

@section('app')

    @include('angulr.layout.parts.header')

    @include('angulr.layout.parts.aside')

    @include('angulr.layout.parts.content')

    @include('angulr.layout.parts.footer')

@endsection