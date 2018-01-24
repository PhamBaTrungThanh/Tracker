'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';


import Treeselect from '@riophae/vue-treeselect'
import AsyncComputed from 'vue-async-computed'
import VeeValidate from 'vee-validate';
import Cleave from 'vue-cleave-component';

import routes from './routes';
import store from './store';

import { Tracker } from './bootstrap';
import Submit from "./resources/Submit.vue";
import Spinner from "./resources/Spinner.vue";
import HeroHeader from "./resources/HeroHeader.vue";

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(AsyncComputed, {
    useRawError: true,
});
Vue.use(VeeValidate);
Vue.use(Cleave);


Vue.use(Tracker);

Vue.component('treeselect', Treeselect);
Vue.component('submit', Submit);
Vue.component('spinner', Spinner);
Vue.component('hero-header', HeroHeader);
// Boostrap

//  we do some vue router, states, and app init
const router = new VueRouter({
    routes: routes,
    mode: 'hash',
});


const app = new Vue({
    el: '#app',
    router,
    store,
});