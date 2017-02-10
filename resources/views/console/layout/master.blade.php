@extends('angulr.layout.master')

@push('stylesheets')
<link rel="stylesheet" href="{{url(smart_mix("assets/css/console.vendor.css",'',false))}}" type="text/css"/>
<link rel="stylesheet" href="{{url(mix("assets/css/console.main.css"))}}" type="text/css"/>
@endpush

@push('scripts')
<script src="{{url(smart_mix("assets/js/console.vendor.js",'',false))}}"></script>
<script src="{{url(mix("assets/js/manifest.js"))}}"></script>
<script src="{{url(mix("assets/js/vendor.js"))}}"></script>
<script src="{{url(mix("assets/js/console.main.js"))}}"></script>
@endpush