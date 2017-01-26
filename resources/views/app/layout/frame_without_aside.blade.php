@extends('angulr.layout.master')

@section('div.app.class', 'app-header-fixed app-aside-fixed app-aside-hidden')

@section('app')

    @include('app.layout.parts.header_without_aside')

    @include('app.layout.parts.content')

    @include('app.layout.parts.footer')

@endsection

@push('stylesheets')
<link rel="stylesheet" href="{{url(elixir("css/app.src.css"))}}" type="text/css"/>
@endpush

@push('scripts')
<script src="{{url(elixir("js/app.src.js"))}}"></script>
@endpush