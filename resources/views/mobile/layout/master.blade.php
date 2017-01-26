@extends('angulr.layout.master')

@push('stylesheets')
<link rel="stylesheet" href="//cdn.bootcss.com/weui/1.1.0/style/weui.min.css">
<link rel="stylesheet" href="//cdn.bootcss.com/jquery-weui/1.0.0/css/jquery-weui.min.css">
<link rel="stylesheet" href="{{url(elixir("css/mobile.src.css"))}}" type="text/css"/>
@endpush

@push('scripts')
<script src="//cdn.bootcss.com/jquery-weui/1.0.0/js/jquery-weui.min.js"></script>
<script src="{{url(elixir("js/mobile.src.js"))}}"></script>
@endpush