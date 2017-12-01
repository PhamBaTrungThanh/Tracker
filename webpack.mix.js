let mix = require('laravel-mix');

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules\/(?!(dom7|swiper)\/).*|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: Config.babel()
                    }
                ]
            }
        ]
    }
});


mix.js('resources/assets/js/app.js', 'public/js')
   .extract(['vue', 'axios', 'vue-router', 'vuex', 'vue-cookie', 'vue-axios']);
    
mix.sass('resources/assets/sass/app.scss', 'public/css');
mix.sourceMaps();
mix.version();
mix.browserSync({
    proxy: "tracker.dev",
});