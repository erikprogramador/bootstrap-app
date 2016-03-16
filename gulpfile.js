var elixir = require('laravel-elixir');

elixir(function (mix) {
    mix.styles([
        '../../../bower_components/bootstrap/dist/css/bootstrap.css',
        'style.css'
    ], 'public/assets/css/app.min.css');

    mix.scripts([
        '../../../bower_components/bootstrap/dist/js/bootstrap.js',
        '../../../bower_components/jquery/dist/jquery.js',
        'app.js'
    ], 'public/assets/js/app.min.js');

    mix.copy('resources/index.html', 'public/index.html');
    mix.copy('resources/assets/img', 'public/assets/img');
});