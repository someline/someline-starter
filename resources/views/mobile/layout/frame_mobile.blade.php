@extends('mobile.layout.master')

@section('div.app.class', 'app-header-fixed app-aside-hidden')

@section('app')

    @include('mobile.layout.parts.mobile_header')

    @include('mobile.layout.parts.content')

    @include('mobile.layout.parts.mobile_footer')

@endsection

@push('scripts')
<script src="{{url(elixir("js/app.src.js"))}}"></script>
@endpush