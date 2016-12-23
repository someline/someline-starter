const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    mix.sass('app.scss')
        .webpack('app.js')
        .webpack('console.js');

    // less
    mix.less('app.less', 'resources/assets/less/css/');

    // app styles
    mix.styles([
        // dependencies
        'public/bower_components/toastr/toastr.css',

        // main styles
        'resources/assets/less/css/*.css',
    ], 'public/css/app.src.css', './');

    // app scripts
    mix.scripts([
        // dependencies
        'public/bower_components/toastr/toastr.js',

        // main vue js
        'public/js/app.js',
    ], 'public/js/app.src.js', './');

    // console styles
    mix.styles([
        // main styles
        'resources/assets/less/css/*.css',
    ], 'public/css/console.src.css', './');

    // console scripts
    mix.scripts([
        // main vue js
        'public/js/console.js',
    ], 'public/js/console.src.js', './');

    // versions
    mix.version([
        // theme
        "public/css/theme.src.css",
        "public/js/theme.src.js",

        // app
        "public/css/app.src.css",
        "public/js/app.src.js",

        // console
        "public/css/console.src.css",
        "public/js/console.src.js",
    ]);

});
