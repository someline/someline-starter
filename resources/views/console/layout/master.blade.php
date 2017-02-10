@extends('angulr.layout.master')

@push('stylesheets')
<link rel="stylesheet" href="{{url(mix("assets/css/console.vendor.css"))}}" type="text/css"/>
<link rel="stylesheet" href="{{url(mix("assets/css/console.main.css"))}}" type="text/css"/>
@endpush

@push('scripts')
<script src="{{url(mix("assets/js/console.vendor.js"))}}"></script>
<script src="{{url(mix("assets/js/manifest.js"))}}"></script>
<script src="{{url(mix("assets/js/vendor.js"))}}"></script>
<script src="{{url(mix("assets/js/console.main.js"))}}"></script>
@endpush