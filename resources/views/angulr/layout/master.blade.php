<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <meta name="keywords" content="@yield('keywords', config('app.keywords')))"/>
    <meta name="description" content="@yield('description', config('app.description'))"/>
    <title>@yield('title', config('app.title', 'Someline Starter'))</title>
    <link rel="stylesheet" href="{{url(mix("assets/css/app.theme.css"))}}" type="text/css"/>
    @stack('stylesheets')
    <script type="text/javascript">
        <?php
        $user = \Auth::user();
        if ($user) {
            $user->setVisible([
                    'user_id',
                    'name',
            ]);
            $user = $user->toArray();
        } else {
            $user = new ArrayObject();
        }
        $data = [
                'locale' => app_locale(),
                'baseUrl' => url('/'),
                'state' => [
                        'user' => $user,
                ],
        ];
        echo 'window.Someline = ' . json_encode($data);
        ?>
    </script>
    <script type="text/javascript">
        <?php
        $data = [
                'csrfToken' => csrf_token(),
        ];
        echo 'window.Laravel = ' . json_encode($data);
        ?>
    </script>
</head>
<body>
<div id="app" class="app @yield('div.app.class')">

    @yield('app')

</div>

<script src="{{url('locales/'.app_locale().'.js?'.substr(md5(json_encode(trans('app'))), -10))}}"></script>
<script src="{{url(mix("assets/js/app.theme.js"))}}"></script>
@stack('pre_scripts')
@stack('scripts')
</body>
</html>
