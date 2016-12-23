@extends('mobile.layout.frame_mobile')

@section('content')
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">

            <router-view></router-view>

        </div>
        <div class="col-md-1"></div>
    </div>
@endsection