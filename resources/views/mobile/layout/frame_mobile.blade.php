@extends('angulr.layout.master')

@section('div.app.class', 'app-header-fixed app-aside-hidden')
{{--@section('div.app.class', 'app-header-hidden app-aside-hidden')--}}

@section('app')

    @include('mobile.layout.parts.mobile_header')

    @include('mobile.layout.parts.content')

    @include('mobile.layout.parts.mobile_footer')

@endsection

@push('stylesheets')
<link rel="stylesheet" href="//cdn.bootcss.com/weui/0.4.3/style/weui.min.css">
<link rel="stylesheet" href="//cdn.bootcss.com/jquery-weui/0.8.0/css/jquery-weui.min.css">
<link rel="stylesheet" href="{{url(elixir("css/mobile.src.css"))}}" type="text/css"/>
@endpush

@push('scripts')
<script src="//cdn.bootcss.com/jquery-weui/0.8.0/js/jquery-weui.min.js"></script>
<script src="{{url(elixir("js/mobile.src.js"))}}"></script>
<script type="text/javascript">

    $("#demoButton1").on('click', function () {
        // show alert
        $.alert("我是一个对话框");
    });

    $("#demoButton2").on('click', function () {
        // show actionsheet
        $.actions({
            actions: [{
                text: "编辑",
                onClick: function () {
                    //do something
                }
            }, {
                text: "删除",
                onClick: function () {
                    //do something
                }
            }]
        });
    });


    $("#demoButton3").on('click', function () {
        // show toast
        $.toptip('警告', 'warning');
    });


    $("#demoButton4").on('click', function () {
        // show toast
        $.toast("取消操作", "cancel");
    });

</script>
@endpush