@extends('app.layout.master')

@section('div.app.class', 'app-header-fixed app-aside-fixed app-aside-hidden')

@section('app')

    @include('app.layout.parts.header_without_aside')

    @include('app.layout.parts.content')

    @include('app.layout.parts.footer')

@endsection