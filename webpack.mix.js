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
    },
    resolve: {
        alias: {
         // handsontable: path.resolve(__dirname, 'node_modules/handsontable-pro')
        }
      },
});


mix.js('resources/assets/js/app.js', 'public/js')
   .extract(['vue', 'axios', 'vue-router', 'vuex', 'tiny-cookie', 'vue-fullscreen', 'vee-validate', '@riophae/vue-treeselect',  'vue-swal', 'vue-async-computed']);
    
mix.sass('resources/assets/sass/app.scss', 'public/css');
mix.sourceMaps();
mix.version();
mix.browserSync("tracker.dev");