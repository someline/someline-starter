const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');
require('laravel-elixir-remove');

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

    // remove build files
    mix.remove('public/build/*');

    // compile
    mix.sass('app.scss')
        .webpack('app.js')
        .webpack('console.js')
        .webpack('mobile.js');

    // less
    mix.less('app.less', 'public/assets/css/app/')
        .less('console.less', 'public/assets/css/console/')
        .less('mobile.less', 'public/assets/css/mobile/');

    // app styles
    mix.styles([
        // dependencies
        'public/bower_components/toastr/toastr.css',

        // main styles
        'public/assets/css/app/*.css',
    ], 'public/css/app.src.css', './')
        .styles([
            // main styles
            'public/assets/css/console/*.css',
        ], 'public/css/console.src.css', './')
        .styles([
            // main styles
            'public/assets/css/mobile/*.css',
        ], 'public/css/mobile.src.css', './');

    // app scripts
    mix.scripts([
        // dependencies
        'public/bower_components/toastr/toastr.js',

        // main vue js
        'public/js/app.js',
    ], 'public/js/app.src.js', './')
        .scripts([
            // main vue js
            'public/js/console.js',
        ], 'public/js/console.src.js', './')
        .scripts([
            // main vue js
            'public/js/mobile.js',
        ], 'public/js/mobile.src.js', './');

    // BrowserSync
    mix.browserSync({
        proxy: 'someline-starter-master.app'   // change proxy domain to your dev host
    });

});
