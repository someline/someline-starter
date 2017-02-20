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

// versions
mix.version([
    'public/assets/js/vendor.js',
    'public/assets/js/mobile.main.js',
    'public/assets/js/console.main.js',
    'public/assets/js/app.main.js',
    'public/assets/css/app.main.css',
    'public/assets/css/console.main.css',
    'public/assets/css/mobile.main.css',
    'public/assets/js/manifest.js',
    'public/assets/css/app.vendor.css',
    'public/assets/css/console.vendor.css',
    'public/assets/css/mobile.vendor.css',
    'public/assets/js/app.vendor.js',
    'public/assets/js/console.vendor.js',
    'public/assets/js/mobile.vendor.js',
    'public/assets/css/app.theme.css',
    'public/assets/js/app.theme.js',
]);
