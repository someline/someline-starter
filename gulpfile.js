var elixir = require('laravel-elixir');
var gulp = require("gulp");
require('laravel-elixir-vueify');

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

elixir(function (mix) {

    // less
    mix.less('app.less', 'resources/assets/less/css/');

    // vue js
    mix.browserify('main.js');

    // styles
    mix.styles([
        // theme styles
        "public/css/theme.src.css",

        // dependencies
        'public/bower_components/toastr/toastr.css',

        // main styles
        'resources/assets/less/css/*.css',
    ], 'public/css/app.src.css', './');

    // scripts
    mix.scripts([
        // theme script
        'public/js/theme.src.js',

        // dependencies
        'public/bower_components/toastr/toastr.js',

        // main vue js
        'public/js/main.js',
    ], 'public/js/app.src.js', './');

    // versions
    mix.version([
        "public/css/app.src.css",
        "public/js/app.src.js",
    ]);

});