const mix = require('laravel-mix');

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

if (mix.inProduction()) {
    mix.options({
        terser: {
            terserOptions: {
                warnings: true,
                // sourceMap: true,
                compress: {
                    warnings: false,
                    drop_console: true
                }
            }
        }
    });
}

mix.options({processCssUrls: false});

// enable source maps
mix.sourceMaps(false);

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
        'vue', 'vue-i18n', 'vuex', 'vue-router',
        'autosize'
    ], 'public/assets/js/vendor');

// app styles
mix.combine([
    /**
     * app vendor styles
     */
    // 'public/bower_components/toastr/toastr.css',
], 'public/assets/css/app.vendor.css')
    .combine([
        /**
         * console vendor styles
         */
        // 'public/bower_components/toastr/toastr.css',
    ], 'public/assets/css/console.vendor.css')
    .combine([
        /**
         * mobile vendor styles
         */
        // 'public/bower_components/toastr/toastr.css',
    ], 'public/assets/css/mobile.vendor.css');

// app scripts
mix.combine([
    /**
     * app vendor js
     */
    // 'public/bower_components/toastr/toastr.js',
], 'public/assets/js/app.vendor.js')
    .combine([
        /**
         * console vendor js
         */
        // 'public/bower_components/toastr/toastr.js',
    ], 'public/assets/js/console.vendor.js')
    .combine([
        /**
         * mobile vendor js
         */
        // 'public/bower_components/toastr/toastr.js',
    ], 'public/assets/js/mobile.vendor.js');

// theme
mix.combine([
    'public/assets/theme/app.theme.css',
], 'public/assets/css/app.theme.css')
    .combine([
        'public/assets/theme/app.theme.js',
    ], 'public/assets/js/app.theme.js');

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

if (mix.inProduction()) {
    mix.version();
}

// BrowserSync
mix.browserSync({
    proxy: 'someline-starter-master.sl',
    port: 3000,
    open: true
})