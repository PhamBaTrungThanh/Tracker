'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import VueSwal from 'vue-swal';
import Treeselect from '@riophae/vue-treeselect'
import AsyncComputed from 'vue-async-computed'
import VeeValidate from 'vee-validate';
import Cleave from 'vue-cleave-component';
import vueTopprogress from 'vue-top-progress';




import routes from './routes';
import store from './store';

import { Tracker } from './bootstrap';
import Submit from "./resources/Submit.vue";
import Spinner from "./resources/Spinner.vue";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueSwal);
Vue.use(AsyncComputed);
Vue.use(VeeValidate);
Vue.use(Cleave);
Vue.use(vueTopprogress);

Vue.use(Tracker);

Vue.component('treeselect', Treeselect);
Vue.component('submit', Submit);
Vue.component('spinner', Spinner);
// Boostrap

//  we do some vue router, states, and app init
const router = new VueRouter({
    routes: routes,
    mode: 'hash',
});

router.afterEach((to, from) => {
    if (typeof to.meta.title === "string") {
        document.title = to.meta.title;
    }
});

const app = new Vue({
    el: '#app',
    router,
    store,
});