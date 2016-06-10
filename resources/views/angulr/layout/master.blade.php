<!DOCTYPE html>
<html lang="en" class="">
<head>
    <meta charset="utf-8"/>
    <title>Looptime</title>
    {{--<meta name="description" content="app, web app, responsive, responsive layout, admin, admin panel, admin dashboard, flat, flat ui, ui kit, AngularJS, ui route, charts, widgets, components" />--}}
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <link rel="stylesheet" href="{{url(elixir("css/app.src.css"))}}" type="text/css"/>
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
                echo 'window.Looptime = ' . json_encode([
                                'csrfToken' => csrf_token(),
                                'jwtToken' => jwt_token(),
                                'state' => [
                                        'user' => $user,
                                ]
                        ]); ?>;
    </script>
</head>
<body>
<div id="app" class="app app-header-fixed @yield('div.app.class')">

    @yield('app')

</div>

<script src="{{url(elixir("js/app.src.js"))}}"></script>
@stack('scripts')
</body>
</html>
