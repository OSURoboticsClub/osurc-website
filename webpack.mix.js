// webpack.mix.js

let mix = require('laravel-mix');

mix.js('assets/js/app.js', 'static/js').sass("assets/css/styles.scss", 'static/css', {}, [
    require('tailwindcss')
])