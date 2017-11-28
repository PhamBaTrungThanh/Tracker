'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueCookie from "vue-cookie";

import axios from 'axios';
import VueAxios from 'vue-axios';

import routes from './routes';
import store from './store';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueCookie);
Vue.use(VueAxios, axios);

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
    router,
    store,
    methods: {
        login() {
            this.$router.push({name: "login"});
        }
    },
    mounted() {
        if (!this.$store.state.authorizationToken) {
            const cookieToken = this.$cookie.get('cookie-token');
            if (!cookieToken) {
                this.login();
            }
            else {
                this.$store.commit('SET_AUTHORIZATION_TOKEN', cookieToken);
            }
        } else {
            // do a call to ./user
            this.axios.defaults.headers.common['Authorization'] = this.$store.state.authorizationToken;
            this.axios.get(`${this.$store.state.apiBase}/user`)
                    .then(response => {
                        this.$store.commit('SET_USER', response.data.data);
                    })
                    .catch(error => {
                        if (error.status == 401) {
                            this.login();
                        } else {
                            console.log(error);
                        }
                    });
            }

  
    },
}).$mount('#app');