import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        authorizationToken: "",
        apiBase: "http://tracker.dev/api/v1",
        user: {},
    },
    mutations: {
        SET_AUTHORIZATION_TOKEN(state, token) {
            state.authorizationToken = token;
        },
        SET_USER(state, userObject) {
            state.user = userObject;
        }
    },
});

export default store;