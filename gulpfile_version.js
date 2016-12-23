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

    // copy necessary fonts
    gulp.src('public/fonts/**')
        .pipe(gulp.dest('public/build/fonts'));

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

        // mobile
        "public/css/mobile.src.css",
        "public/js/mobile.src.js",
    ]);

});
