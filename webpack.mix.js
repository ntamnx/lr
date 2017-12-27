let mix = require('laravel-mix');

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

mix.react('resources/assets/js/src/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
mix.scripts(['resources/assets/plugins/toast/toastr.min.js'], 'public/js/all.js')
