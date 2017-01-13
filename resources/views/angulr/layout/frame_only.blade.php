@extends('angulr.layout.master')

@section('div.app.class', 'app-aside-fixed app-aside-hidden bg-white')

@section('app')

    @include('angulr.layout.parts.content')

@endsection

@push('stylesheets')
<link rel="stylesheet" href="{{url(elixir("css/app.src.css"))}}" type="text/css"/>
@endpush

@push('scripts')
<script src="{{url(elixir("js/app.src.js"))}}"></script>
@endpush