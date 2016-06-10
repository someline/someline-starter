@extends('angulr.layout.frame_without_aside')

@section('content')
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">

            <div class="wrapper-md">

                <h1>Users</h1>
                <hr>

                <div class="row">

                    <lt-user-list></lt-user-list>

                </div>

            </div>

        </div>
        <div class="col-md-1"></div>
    </div>
@endsection