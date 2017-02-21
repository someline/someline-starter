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
mix.less('resources/assets/angulr/css/less/app.less', 'public/assets/theme/theme.css');

// styles
mix.combine([
    'public/bower_components/bootstrap/dist/css/bootstrap.css',
    'public/vendors/bower_components/animate.css/animate.css',
    'public/bower_components/font-awesome-4.7.0/css/font-awesome.css',
    'public/vendors/bower_components/simple-line-icons/css/simple-line-icons.css',
    'public/assets/theme/theme.css',
    'resources/assets/angulr/css/font.css'
], 'public/css/theme.src.css');

// scripts
mix.combine([
    'public/vendors/bower_components/jquery/dist/jquery.min.js',
    'public/bower_components/bootstrap/dist/js/bootstrap.min.js',
    'resources/assets/angulr/js/support/ui-client.js',
    'resources/assets/angulr/js/support/ui-jp.config.js',
    'resources/assets/angulr/js/support/ui-jp.js',
    'resources/assets/angulr/js/support/ui-load.js',
    'resources/assets/angulr/js/support/ui-nav.js',
    'resources/assets/angulr/js/support/ui-toggle.js',
], 'public/js/theme.src.js');

// copy necessary fonts
mix.copy('public/fonts/**', 'public/build/fonts');

// @side effect: copy is async, so it copy last complied files,
// @SOLUTION: run `npm run theme` twice, as of mix@v0.8.0
mix.copy('../../../../public/css/theme.src.css', '../../../../public/assets/theme/app.theme.css');
mix.copy('../../../../public/js/theme.src.js', '../../../../public/assets/theme/app.theme.js');
