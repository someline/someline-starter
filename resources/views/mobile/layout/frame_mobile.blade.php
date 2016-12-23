@extends('angulr.layout.master')

@section('div.app.class', 'app-header-fixed app-aside-hidden')

@section('app')

    @include('mobile.layout.parts.mobile_header')

    @include('mobile.layout.parts.content')

    @include('mobile.layout.parts.mobile_footer')

@endsection

@push('stylesheets')
{{--<link rel="stylesheet" href="//res.wx.qq.com/open/libs/weui/1.1.0/weui.min.css"/>--}}
<link rel="stylesheet" href="//cdn.bootcss.com/weui/0.4.3/style/weui.min.css">
<link rel="stylesheet" href="//cdn.bootcss.com/jquery-weui/0.8.0/css/jquery-weui.min.css">
<style type="text/css">
    .weui_mask,
    .weui_dialog,
    .weui_actionsheet,
    .weui_toptips,
    .weui_toast {
        z-index: 10000;
    }
</style>
@endpush

@push('scripts')
<script src="{{url(elixir("js/app.src.js"))}}"></script>
<script src="//cdn.bootcss.com/jquery-weui/0.8.0/js/jquery-weui.min.js"></script>
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