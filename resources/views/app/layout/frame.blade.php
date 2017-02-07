@extends('app.layout.master')

@section('div.app.class', 'app-header-fixed app-aside-fixed')

@section('app')

    @include('app.layout.parts.header')

    @include('app.layout.parts.aside')

    @include('app.layout.parts.content')

    @include('app.layout.parts.footer')

@endsection