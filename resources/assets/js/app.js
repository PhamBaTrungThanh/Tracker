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
    created() {
        if (!this.$store.state.authorizationToken) {
            console.warn("No token found, process to checking cookies");
            const cookieToken = this.$cookie.get('cookie-token');
            if (!cookieToken) {
                console.error("Cookies's empty, proceed to login");
                this.login();
            }
            else {
                console.info("Token found from cookies");
                this.$store.commit('SET_AUTHORIZATION_TOKEN', cookieToken);
            }
        }
        if (this.$store.state.authorizationToken) {
            // do a call to ./user
            this.axios.defaults.headers.common['Authorization'] = this.$store.state.authorizationToken;
            this.axios.get(`${this.$store.state.apiBase}/user`)
                    .then(response => {
                        console.info("Token is legit");
                        this.$store.commit('SET_USER', response.data.data);
                    })
                    .catch(error => {
                        console.log(error.response.status);
                        if (error.response.status == 401) {
                            console.error("Token ilegal, proceed to login");
                            this.login();
                        } else {
                            console.log(error);
                        }
                    });
            }

  
    },
}).$mount('#app');