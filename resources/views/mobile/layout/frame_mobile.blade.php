@extends('angulr.layout.master')

@section('div.app.class', 'app-header-fixed app-aside-hidden')
{{--@section('div.app.class', 'app-header-hidden app-aside-hidden')--}}

@section('app')

    {{--@include('mobile.layout.parts.mobile_header')--}}
    <sl-app-header></sl-app-header>

    @include('mobile.layout.parts.content')

    @include('mobile.layout.parts.mobile_footer')

@endsection

@push('stylesheets')
<link rel="stylesheet" href="//cdn.bootcss.com/weui/0.4.3/style/weui.min.css">
<link rel="stylesheet" href="//cdn.bootcss.com/jquery-weui/0.8.0/css/jquery-weui.min.css">
<link rel="stylesheet" href="{{url(elixir("css/mobile.src.css"))}}" type="text/css"/>
@endpush

@push('scripts')
<script src="//cdn.bootcss.com/jquery-weui/0.8.0/js/jquery-weui.min.js"></script>
<script src="{{url(elixir("js/mobile.src.js"))}}"></script>
@endpush