let mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js')
   .extract(['vue', 'axios', 'vue-router', 'vuex',
             'tiny-cookie', 'vue-fullscreen', 'vee-validate',
             '@riophae/vue-treeselect',  'vue-swal', 'vue-async-computed',
             'vue-cleave-component', 'vue-monthly-picker', 'vue-top-progress', 'chart.js']);
    
mix.sass('resources/assets/sass/app.scss', 'public/css');
mix.copy("resources/assets/images", "public/images");
mix.version();
mix.sourceMaps();
mix.disableSuccessNotifications();
