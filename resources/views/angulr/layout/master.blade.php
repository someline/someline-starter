<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Someline Starter') }}</title>
    <meta name="keywords" content="laravel,restful,api,vue.js,vuejs"/>
    <meta name="description"
          content="Someline Starter is a framework for quick building Web Apps or APIs, with modern PHP design pattern foundation, which is built on top of popular Laravel 5 framework, Vue.js, Restful API, Repository Design, OAuth2, JWT, Unit Tests, isolated front-end and back-end layer."/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <link rel="stylesheet" href="{{url(smart_mix("assets/css/app.theme.css",'',false))}}" type="text/css"/>
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
<script src="{{url(smart_mix("assets/js/app.theme.js",'',false))}}"></script>
@stack('pre_scripts')
@stack('scripts')
</body>
</html>
