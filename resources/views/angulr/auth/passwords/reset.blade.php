@extends('angulr.auth.auth_base')

@section('content')
    <div class="wrapper text-center">
        <strong>Reset Password</strong>
    </div>

    @if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
    @endif

    <form name="form" class="form-horizontal form-validation" role="form" method="POST" action="{{ route('password.request') }}">
        {{ csrf_field() }}

        <input type="hidden" name="token" value="{{ $token }}">

        @if (!empty($errors))
            <div class="text-danger wrapper text-center">
                {{$errors->first()}}
            </div>
        @endif
        <div class="list-group list-group-sm">
            <div class="list-group-item">
                <input type="email" placeholder="Email" class="form-control no-border" name="email"
                       value="{{ old('email') }}" required>
            </div>
            <div class="list-group-item">
                <input type="password" placeholder="Password" class="form-control no-border" name="password"
                       required>
            </div>
            <div class="list-group-item">
                <input type="password" placeholder="Confirm Password" class="form-control no-border"
                       name="password_confirmation"
                       required>
            </div>
        </div>
        <button type="submit" class="btn btn-lg btn-primary btn-block">
            Reset Password
        </button>

        <div class="wrapper"></div>

    </form>
@endsection