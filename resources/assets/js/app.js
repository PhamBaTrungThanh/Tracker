'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import VueSwal from 'vue-swal';
import Treeselect from '@riophae/vue-treeselect'
import ModalDialogs from 'vue-modal-dialogs';
import AsyncComputed from 'vue-async-computed'


import axios from 'axios';

import routes from './routes';
import store from './store';

import {commafly} from './bootstrap';

Vue.use(ModalDialogs);

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueSwal);
Vue.use(AsyncComputed);

Vue.component('treeselect', Treeselect);
// Boostrap
// First we make axios globaly accessible
window.axios = axios;
window.commafly = commafly;
// Next we do some vue router, states, and app init
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