var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('../angulr/css/less/app.less', 'resources/assets/angulr/css/');
    mix.styles([
        'public/bower_components/toastr/toastr.css',

        'public/vendors/bower_components/bootstrap/dist/css/bootstrap.css',
        'public/vendors/bower_components/animate.css/animate.css',
        'public/vendors/bower_components/font-awesome/css/font-awesome.css',
        'public/vendors/bower_components/simple-line-icons/css/simple-line-icons.css',
        'resources/assets/angulr/css/*.css'
    ], 'public/css/app.src.css', './');

    // scripts
    // vue js
    mix.browserify('main.js');

    mix.scripts([
        'public/vendors/bower_components/jquery/dist/jquery.min.js',
        'public/vendors/bower_components/bootstrap/dist/js/bootstrap.min.js',
        'resources/assets/angulr/js/support/ui-*.js',

        // dependencies
        'public/bower_components/toastr/toastr.js',

        'public/js/main.js',
    ], 'public/js/app.src.js', './');

    // versions
    mix.version([
        "public/css/app.src.css",
        "public/js/app.src.js",
    ]);
});
