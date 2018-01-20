import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import { capitalizeFirstChar } from "./bootstrap";

const store = new Vuex.Store({
    state: {
        apiBase:`${window.location.protocol}//${window.location.host}/api/v1`,
        user: {},
        passportGrantClient: document.querySelector("meta[name='passport-grant-client']").getAttribute('content'),
        categoryList: {},
        providers: [],
        works: [],
        invoices: [],
        payments: [],
        receives: [],
        currentWork: { id: 0},
        currentWorkId: false,
        reload: false,
        page: {
            description: "",
            title: "MEC",
            isBigMeta: false,
            background: false,
        },
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
    getters: {
        getWorkById: (state) => (work_id) => {
            return state.works.find( w => w.id === parseInt(work_id))
        },
        getProviderById: (state) => (id) => {
            return state.providers.find( p => p.id === parseInt(id));
        },
        findRelatedInvoice: (state) => ({parent_id, parent_name}) => {
            
            const _t = state.invoices.reduce( (invoices, invoice) => {
                
                if (invoice[`${parent_name}_id`] === parseInt(parent_id)) {
                    
                    invoices.push(invoice);
                }
                return invoices;
            }, [] );
            
            return _t;
        }
    },
    actions: {
        setWorkId(context, work_id) {
            context.commit('SET_CURRENT_WORK_ID', work_id);
            if (context.state.currentWork.id !== work_id) {
                context.dispatch('httpGetWork', work_id);
            }
        },
        setPageMeta(context, meta) {
            context.commit('SET_CURRENT_PAGE_META', meta);
        },
        httpGetWork(context, work_id) {
            this._vm.axios.get(`work/${work_id}`).then( response => {
                context.commit('SET_CURRENT_WORK', response.data.data);
            });
        },
        httpGetWorks( context ) {
            return new Promise( resolve => {
                this._vm.axios.get(`work`).then( response => {
                    context.commit('SET_WORKS', response.data.data);
                    resolve(response.data.data);
                });
            });
        },
        httpGetInvoices( {commit} , params = {}) {
            return new Promise( resolve => {
                this._vm.axios.get(`invoice`, {
                    'params': params,
                }).then( response => {
                    if (response.data.data) {
                        commit('ADD_INVOICES', response.data.data);
                    }
                    resolve(response.data.data);
                });
            })

        },
        httpGetProviders(context) {
            this._vm.axios.get(`provider`).then( response => {
                context.commit('SET_PROVIDERS', response.data.data);
            });
        },
        httpGetUser(context, _with) {
            this._vm.axios.get('user').then( response => {
                context.commit('SET_USER', response.data.data);
                
            }).catch( error => {
                console.log(error)
                this._vm.$router.push("login");
            });
        },
        getWork( context, work_id ) {
            /*
            return new Promise( resolve => {
                let work = context.getters.getWorkById(work_id);
                if (!work) {
                    context.dispatch("httpGetWorks").then( result => {
                        resolve(context.getters.getWorkById(work_id));
                    });
                } else {
                    resolve(work);
                }
            });*/
            let work = context.getters.getWorkById(work_id);

            if (work) {
                return Promise.resolve(work);
            } else {
                return context.dispatch("httpGetWorks").then( result => {
                    return result.find(w => w.id === parseInt(work_id));
                });
            }
        },
        getRelatedInvoices( { state, dispatch, getters }, {parent_name, parent_id, expect}) {
            let returner = getters.findRelatedInvoice({
                'parent_id': parent_id,
                'parent_name': parent_name,
            });
            
            if (returner.length === expect) {
                return Promise.resolve(returner);
            }
            else {
                const inHand = returner.reduce( (ids, invoice) => {
                    ids.push(invoice.id);
                    return ids;
                }, []);
                
                const params = {
                    'action': "more",
                    'not_in': inHand.join(","),
                    'parent_id': parent_id,
                    'parent_name': parent_name,
                };
                return dispatch("httpGetInvoices", params).then( result => {
                    return returner.push(...result);
                });
                
            }
        },
        getRelatedContracts() {
            return false;
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
        SET_WORKS( state, works) {
            state.works = works;
        },
        SET_PROVIDERS(state, providers) {
            state.providers = providers;
        },
        ADD_INVOICES( state, invoices) {
            state.invoices.push(...invoices);
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
        },
        SET_CURRENT_PAGE_META ( state, meta) {
            state.page = Object.assign({}, state.page, meta);
        }
    },
});

export default store;