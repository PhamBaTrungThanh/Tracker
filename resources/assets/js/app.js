'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';


import axios from 'axios';
import routes from './routes';
import store from './store';

import MaterialRow from "./components/Rows/MaterialRow.vue";
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.component('material-row', MaterialRow);
// Boostrap
// First we make axios globaly accessible
window.axios = axios;

// Next we do some vue router, states, and app init
const router = new VueRouter({
    routes: routes,
    mode: 'history',
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