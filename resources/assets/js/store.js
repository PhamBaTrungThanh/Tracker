import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        authorizationToken: "",
        apiBase:`${window.location.protocol}//${window.location.host}/api/v1`,
        user: {},
        passportGrantClient: document.querySelector("meta[name='passport-grant-client']").getAttribute('content'),
        categoryList: {},
        providers: [],
        currentWork: { id: 0},
        currentWorkId: false,
        reload: false,
        cleaveOptions: {
            price: {
                "numeral": true,
                "numeralThousandsGroupStyle": 'thousand'
            },
            date: {
                "date": true,
                "datePattern": ["d", "m", "Y"],
            }
        },
        veeValidations: {

        },
        paymentMethods: [
            {
                "label": "Chuyển khoản",
                "id": "bank_transfer"
            },
            {
                "label": "Tiền mặt",
                "id": "cash"
            }
        ],
    },
    actions: {
        setWorkId(context, work_id) {
            context.commit('SET_CURRENT_WORK_ID', work_id);
            if (context.state.currentWork.id !== work_id) {
                context.dispatch('httpGetWork', work_id);
            }
        },
        httpGetWork(context, work_id) {
            this._vm.axios.get(`work/${work_id}`).then( response => {
                context.commit('SET_CURRENT_WORK', response.data.data);
            });
        },
        httpGetProviders(context) {
            this._vm.axios.get(`providers`).then( response => {
                context.commit('SET_PROVIDERS', response.data.data);
            });
        }
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
        SET_PROVIDERS(state, providers) {
            state.providers = providers;
        },
        SET_CURRENT_WORK (state, work) {
            state.currentWork = work;
        },
        SET_CURRENT_WORK_ID (state, work_id) {
            state.currentWorkId = work_id;
        },
        RELOAD_WORK( state ) {
            state.reload = "reload_work";
        },
        RELOAD_WORK_COMPLETE ( state ) {
            state.reload = "false";
        }
    },
});

export default store;