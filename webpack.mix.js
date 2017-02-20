const {mix} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({ processCssUrls: false });

// less
mix.less('resources/assets/less/app.less', 'public/assets/css/app.main.css')
    .less('resources/assets/less/console.less', 'public/assets/css/console.main.css')
    .less('resources/assets/less/mobile.less', 'public/assets/css/mobile.main.css');

// js
mix.js('resources/assets/js/app.js', 'public/assets/js/app.main.js')
    .js('resources/assets/js/console.js', 'public/assets/js/console.main.js')
    .js('resources/assets/js/mobile.js', 'public/assets/js/mobile.main.js')
    .extract([
        'jquery', 'lodash', 'moment', 'axios',
        'vue', 'vuex', 'vue-i18n', 'vue-router',
        'autosize'
    ], 'public/assets/js/vendor');

// enable source maps
mix.sourceMaps();

// app styles
mix.combine([
    // app vendor styles
    'public/bower_components/toastr/toastr.css',
], 'public/assets/css/app.vendor.css')
    .combine([
        // console vendor styles
        'public/bower_components/toastr/toastr.css',
    ], 'public/assets/css/console.vendor.css')
    .combine([
        // mobile vendor styles
        'public/bower_components/toastr/toastr.css',
    ], 'public/assets/css/mobile.vendor.css');

// app scripts
mix.combine([
    // app vendor js
    'public/bower_components/toastr/toastr.js',
], 'public/assets/js/app.vendor.js')
    .combine([
        // console vendor js
        'public/bower_components/toastr/toastr.js',
    ], 'public/assets/js/console.vendor.js')
    .combine([
        // mobile vendor js
        'public/bower_components/toastr/toastr.js',
    ], 'public/assets/js/mobile.vendor.js');

// theme
mix.combine([
    'public/assets/theme/app.theme.css',
], 'public/assets/css/app.theme.css')
    .combine([
        'public/assets/theme/app.theme.js',
    ], 'public/assets/js/app.theme.js');

// BrowserSync
mix.browserSync({
    proxy: 'someline-starter.app',
    port: 3000,
    open: true
})