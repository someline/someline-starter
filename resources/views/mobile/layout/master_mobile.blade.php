@extends('angulr.layout.master')

@push('stylesheets')
<link rel="stylesheet" href="//cdn.bootcss.com/weui/1.1.0/style/weui.min.css">
<link rel="stylesheet" href="//cdn.bootcss.com/jquery-weui/1.0.0/css/jquery-weui.min.css">
<link rel="stylesheet" href="{{url(smart_mix("assets/css/mobile.vendor.css",'',false))}}" type="text/css"/>
<link rel="stylesheet" href="{{url(mix("assets/css/mobile.main.css"))}}" type="text/css"/>
@endpush

@push('scripts')
<script src="//cdn.bootcss.com/jquery-weui/1.0.0/js/jquery-weui.min.js"></script>
<script src="{{url(smart_mix("assets/js/mobile.vendor.js",'',false))}}"></script>
<script src="{{url(mix("assets/js/manifest.js"))}}"></script>
<script src="{{url(mix("assets/js/vendor.js"))}}"></script>
<script src="{{url(mix("assets/js/mobile.main.js"))}}"></script>
@endpush