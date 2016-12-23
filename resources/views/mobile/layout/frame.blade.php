@extends('angulr.layout.master')

@section('div.app.class', 'app-header-fixed app-aside-fixed')

@section('app')

    @include('mobile.layout.parts.header')

    @include('mobile.layout.parts.aside')

    @include('mobile.layout.parts.content')

    @include('mobile.layout.parts.footer')

@endsection

@push('stylesheets')
<link rel="stylesheet" href="{{url(elixir("css/mobile.src.css"))}}" type="text/css"/>
@endpush

@push('scripts')
<script src="{{url(elixir("js/mobile.src.js"))}}"></script>
@endpush