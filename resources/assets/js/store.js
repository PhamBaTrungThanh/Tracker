import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);



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
        page: {},
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
        httpGetProviders(context) {
            this._vm.axios.get(`providers`).then( response => {
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
            return new Promise( (resolve, reject) => {
                let work = context.getters.getWorkById(work_id);
                if (!work) {
                    context.dispatch("httpGetWorks").then( result => {
                        resolve(context.getters.getWorkById(work_id));
                    });
                }
            });
        },
        getRelatedInvoices( { state, dispatch, commit }, parent_id, parent_name) {
            const expect = parent.count_invoices;
            console.log("call getRelatedInvoices");
            return new Promise( (resolve, reject) => {

                const finder = (data) => (data.reduce( (invoices, invoice) => {
                    if (invoice[`${parent_name}_${parent_id}`] === parent.id) {
                        invoices.push(invoice);
                    }
                }, []));

                let _returner = finder(state.invoices);
                if (_returner.length !== expect) { // not enough, i want more
                    const inHand = _returner.reduce( (ids, invoice) => ids.push(invoice.id), []);
                     this._vm.axios.get(`invoice`, {
                        'params': {
                            'action': "more",
                            'not_in': inHand.join(","),
                            'parent_id': parent.id,
                        }
                    }).then( (response) => {
                        _returner = _returner.concat(response.data.data);
                        commit("ADD_INVOICES", response.data.data);
                        resolve(_returner);
                    });
                    
                } else {
                    resolve(_returner);
                }
            })
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
            state.page = meta;
        }
    },
});

export default store;