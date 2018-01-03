import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        authorizationToken: "",
        apiBase:`${window.location.protocol}//${window.location.host}/api/v1`,
        user: {},
        categoryList: {},
        currentWork: {},
    },
    mutations: {
        SET_AUTHORIZATION_TOKEN(state, token) {
            state.authorizationToken = token;
        },
        REMOVE_AUTHORIZATION_TOKEN(state) {
            state.authorizationToken = '';
        },
        SET_USER(state, userObject) {
            state.user = userObject;
        },
        UPDATE_CATEGORY_LIST(state, list) {
            state.categoryList = list;
        },
        SET_CURRENT_WORK (state, work) {
            state.currentWork = work;
        }
    },
});

export default store;