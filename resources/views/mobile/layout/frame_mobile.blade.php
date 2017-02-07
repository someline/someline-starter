@extends('mobile.layout.master_mobile')

@section('div.app.class', 'app-header-fixed app-aside-hidden')
{{--@section('div.app.class', 'app-header-hidden app-aside-hidden')--}}

@section('app')

    {{--@include('mobile.layout.parts.mobile_header')--}}
    <sl-app-header></sl-app-header>

    @include('mobile.layout.parts.content')

    {{--@include('mobile.layout.parts.mobile_footer')--}}
    <sl-app-tab-bar></sl-app-tab-bar>

@endsection