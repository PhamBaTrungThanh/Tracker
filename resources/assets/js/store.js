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
        getInvoiceById: (state) => (id) => {
            return state.invoices.find( i => i.id === parseInt(id));
        },
        getPaymentById: (state) => (id) => {
            return state.payments.find( p => p.id === parseInt(id));
        },
        findRelatedInvoices: (state) => ({parent_id, parent_name}) => {
            
            const _t = state.invoices.reduce( (invoices, invoice) => {
                
                if (invoice[`${parent_name}_id`] === parseInt(parent_id)) {
                    
                    invoices.push(invoice);
                }
                return invoices;
            }, [] );
            
            return _t;
        },
        findRelatedPayments: (state) => (invoice_id) => {
            const _p = state.payments.reduce( (payments, payment) => {
                if (payment.invoice_id === parseInt(invoice_id)) {
                    payments.push(payment);
                }
                return payments;
            }, []);
            return _p;
        }
    },
    actions: {

        /* QUERY SINGLE INSTANCE */

        httpGetInvoice( {commit}, id ) {
            return new Promise( resolve => {
                this._vm.axios.get(`invoice/${id}`).then( response => {
                    commit('STORE_INVOICE', response.data.data);
                    resolve(response.data.data);
                });
            });
        },
        httpGetPayment( {commit, getters}, id) {
            return new Promise( resolve => {
                this._vm.axios.get(`payment/${id}`).then( response => {
                    commit('STORE_PAYMENT', response.data);
                    resolve(getters.getPaymentById(response.data.data.id));
                });
            });
        },
        httpGetUser(context, _with) {
            this._vm.axios.get('user').then( response => {
                context.commit('STORE_USER', response.data.data);
                
            }).catch( error => {
                console.log(error)
                this._vm.$router.push("login");
            });
        },
        
        /* QUERY MUTIPLE INSTANCE */

        httpGetWorks( context ) {
            return new Promise( resolve => {
                this._vm.axios.get(`work`).then( response => {
                    context.commit('STORE_MUTIPLE_WORKS', response.data.data);
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
                        if (response.data.data.length === 1) {
                            commit('STORE_INVOICE', response.data.data);
                        } else {
                            commit('STORE_MUTIPLE_INVOICES', response.data.data);
                        }
                        
                    }
                    resolve(response.data.data);
                });
            })
        },
        httpGetPayments( {commit}, params = {}) {
            return new Promise( resolve => {
                this._vm.axios.get(`payment`, {
                    'params': params,
                }).then( response => {
                    if (response.data.data) {
                        if (response.data.data.length === 1) {
                            commit('STORE_PAYMENT', response.data.data);
                        } else {
                            commit('STORE_MUTIPLE_PAYMENTS', response.data.data);
                        }
                        
                    }

                    resolve(response.data.data);
                });
            })
        },
        httpGetProviders(context) {
            this._vm.axios.get(`provider`).then( response => {
                context.commit('STORE_MUTIPLE_PROVIDERS', response.data.data);
            });
        },

        /* PROMISE BASE GETTERS */
        getWork( context, {work_id} ) {

            let work = context.getters.getWorkById(work_id);

            if (work) {
                return Promise.resolve(work);
            } else {
                return context.dispatch("httpGetWorks").then( result => {
                    return result.find(w => w.id === parseInt(work_id));
                });
            }
        },
        getInvoice( {state, dispatch, getters}, {invoice_id} ) {
            let invoice = getters.getInvoiceById(invoice_id);
            if (invoice) {
                return Promise.resolve(invoice);
            } else {
                return dispatch("httpGetInvoice", invoice_id);
            }
        }, 
        getPayment({state, dispatch, getters}, {payment_id, fetchNew = false}) {
            let payment = false;
            if (!fetchNew) {
                payment = getters.getPaymentById(payment_id);
            }
            if (payment) {
                return Promise.resolve(payment);
            } else {
                return dispatch("httpGetPayment", payment_id);
            }
        },
        getRelatedPayments( { state, dispatch, getters }, {invoice_id, expect}) {
            let returner = getters.findRelatedPayments(invoice_id);
            
            if (returner.length === expect) {
                return Promise.resolve(returner);
            }
            else {
                const inHand = returner.reduce( (ids, payment) => {
                    ids.push(payment.id);
                    return ids;
                }, []);
                
                const params = {
                    'not_in': inHand.join(","),
                    'invoice_id': invoice_id,
                };
                return dispatch("httpGetPayments", params).then( result => {
                     return returner.push(...result);
                });
                
            }
        },
        getRelatedInvoices( { state, dispatch, getters }, {parent_name, parent_id, expect}) {
            let returner = getters.findRelatedInvoices({
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
        STORE_USER(state, userObject) {
            state.user = userObject;
        },
        UPDATE_CATEGORY_LIST(state, list) {
            state.categoryList = list;
        },
        STORE_MUTIPLE_WORKS( state, works) {
            state.works = works;
        },
        STORE_MUTIPLE_PROVIDERS(state, providers) {
            state.providers = providers;
        },
        STORE_INVOICE(state, invoice) {
            state.invoices.push(invoice);
        },
        STORE_PAYMENT(state, data) {
            let payment = data.data;
            if (data.extra) {
                payment = Object.assign({}, payment, data.extra);
            }
            const _i = state.payments.findIndex(p => p.id === payment.id);
            if (_i === -1) {
                state.payments.push(payment);
            } else {
                this.$set(state.payments, _i, payment);
            }
        },
        STORE_MUTIPLE_INVOICES( state, invoices) {
            state.invoices.push(...invoices);
        },
        STORE_MUTIPLE_PAYMENTS(state, payments) {
            state.payments.push(...payments);
        },
        SET_CURRENT_PAGE_META ( state, meta) {
            state.page = Object.assign({}, state.page, meta);
        }
    },
});

export default store;