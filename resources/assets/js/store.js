import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import { capitalizeFirstChar } from "./bootstrap";

const store = new Vuex.Store({
    state: {
        user: {},
        passportGrantClient: document.querySelector("meta[name='passport-grant-client']").getAttribute('content'),
        categoryList: {},
        providers: [],
        works: [],
        invoices: [],
        payments: [],
        receives: [],
        trackers: [],
        materials: [],
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
        getMaterialById: (state) => id => {
            return sate.materials.find( m => m.id === id);
        },
        getPaymentById: (state) => (id) => {
            return state.payments.find( p => p.id === parseInt(id));
        },
        getMaterialsByIds: (state) => (ids) => {
            return state.materials.reduce( (materials, material) => {
                if (ids.indexOf(material.id) !== -1) {
                    materials.push(material);
                }
                return materials;
            }, []);
        },
        findRelatedInvoices: (state) => ({work_id, provider_id}) => {
            
            const _t = state.invoices.reduce( (invoices, invoice) => {               
                if (work_id && provider_id) {
                    if (invoice.work_id === parseInt(work_id) && invoice.provider_id === parseInt(provider_id)) {
                        invoices.push(invoice);
                    }
                } else {
                    if (provider_id) {
                        if (invoice.provider_id === parseInt(provider_id)) {
                            invoices.push(invoice);
                        }                    
                    }
                    if (work_id) {
                        if (invoice.work_id === parseInt(work_id)) {
                            invoices.push(invoice);
                        }                    
                    }
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
        },
        findRelatedTrackers: (state) => ({invoice_id, material_id}) => {
            const _t = state.trackers.reduce( (trackers, tracker) => {
                if (invoice_id) {
                    if (tracker.invoice_id === parseInt(invoice_id)) {
                        trackers.push(tracker);
                    }
                } else if (material_id) {
                    if (tracker.material_id === parseInt(material_id)) {
                        trackers.push(tracker);
                    }                    
                }

                return trackers;
            }, []);
            return _t;
        },
        findMissingMaterialsIds: (state) => (material_ids) => {

            let ids = (material_ids instanceof Array) ? material_ids : [material_ids];
            for (let i = state.materials.length; i > 0; i--) {
                let _i = ids.indexOf(state.materials[i]);
                if (_i !== -1) {
                    ids.splice(_i, 1);
                }
            }
            return ids;
        },
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
                        commit('STORE_MUTIPLE_PAYMENTS', response.data.data);                       
                    }

                    resolve(response.data.data);
                });
            })
        },
        httpGetTrackers( {commit}, params = {}) {
            return new Promise( resolve => {
                this._vm.axios.get(`tracker`, {
                    'params': params,
                }).then( response => {
                    if (response.data.data) {
                        
                        commit('STORE_MUTIPLE_TRACKERS', response.data.data);                       
                    }

                    resolve(response.data.data);
                }).catch( error => {
                    console.log(error);
                });
            })
        },
        httpGetMaterials({commit}, params = {}) {
            return new Promise( resolve => {
                this._vm.axios.get(`material`, {
                    'params': params,
                }).then( response => {
                    if (response.data.data) {
                        commit('STORE_MUTIPLE_MATERIALS', response.data.data);                       
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
        /* GUARANTEE EXITS INSTANCES */
        guaranteeMaterials( {getters, dispatch}, {material_ids} ) {
            let materials = getters.getMaterialsByIds(material_ids);
            if (materials.length < material_ids.length) {
                const missing = getters.findMissingMaterialsIds(material_ids);
                
                return dispatch("httpGetMaterials", {
                    'in': missing.join(","),
                }).then( result => {
                    return materials.push(...materials);
                });
            } else {
                return Promise.resolve(materials);
            }
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
        getInvoice( {dispatch, getters}, {invoice_id} ) {
            let invoice = getters.getInvoiceById(invoice_id);
            if (invoice) {
                return Promise.resolve(invoice);
            } else {
                return dispatch("httpGetInvoice", invoice_id);
            }
        }, 
        getPayment({dispatch, getters}, {payment_id, fetchNew = false}) {
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
        getRelatedPayments( { dispatch, getters }, {invoice_id, expect}) {
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
        getRelatedInvoices( { dispatch, getters }, {work_id, provider_id, expect}) {
            let returner = getters.findRelatedInvoices({
                'work_id': work_id,
                'provider_id': provider_id,
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
                    'not_in': inHand.join(","),
                    'work_id': work_id,
                    'provider_id': provider_id,
                };
                return dispatch("httpGetInvoices", params).then( result => {
                    return returner.push(...result);
                });
                
            }
        },
        getRelatedTrackers({ dispatch, getters }, {invoice_id, material_id, expect}) {
            let returner = getters.findRelatedTrackers({
                'invoice_id': invoice_id,
                'material_id': material_id,
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
                    'not_in': inHand.join(","),
                    'invoice_id': invoice_id,
                    'material_id': material_id,
                };
                return dispatch("httpGetTrackers", params).then( result => {
                    return returner.push(...result);
                });
                
            }            
        },
        getRelatedContracts() {
            return false;
        },
        /* NEW STATE */
        newPayment( context, payment ) {
            context.commit("NEW_PAYMENT", payment);
        },
        /* UPDATE STATE */
        updateInvoice( context, invoice ) {
            context.commit("UPDATE_INVOICE", invoice);
        },

        /* DELETE STATE */
        removePaymentsById(context, ids) {
            context.commit("REMOVE_PAYMENTS", ids);
        }
    },
    mutations: {
        SET_AUTHORIZATION_TOKEN(state, token) {
            state.authorizationToken = token;
        },
        REMOVE_AUTHORIZATION_TOKEN(state) {
            state.authorizationToken = '';
        },
         // -- user state
        /**
         * Store single user instance
         * @param {*} state $store global state
         * @param {*} userObject 
         */
        STORE_USER(state, userObject) {
            state.user = userObject;
        },
        UPDATE_CATEGORY_LIST(state, list) {
            state.categoryList = list;
        },

         // -- works state
        /**
         * Store mutiple work instances
         * @param {*} state $store global state
         * @param {*} works work instances
         */
        STORE_MUTIPLE_WORKS( state, works) {
            state.works = works;
        },

        STORE_MUTIPLE_PROVIDERS(state, providers) {
            state.providers = providers;
        },
         // -- invoices state
        STORE_INVOICE(state, invoice) {
            state.invoices.push(invoice);
        },
        STORE_MUTIPLE_INVOICES( state, invoices) {
            state.invoices.push(...invoices);
        },
        UPDATE_INVOICE(state, invoice) {
   
            if (state.invoices.length === 0) {
                state.invoices.push(invoice);
            } else {
                const _i = state.invoices.findIndex(p => p.id === invoice.id);
                if (_i === -1) {
                    state.invoices.push(invoice);
                } else {
                    Vue.set(state.invoices, _i, invoice);
                }
            }
        },

        // -- trackers state
        STORE_MUTIPLE_TRACKERS(state, trackers) {
            state.trackers.push(...trackers);
        },
        // -- materials state
        STORE_MUTIPLE_MATERIALS(state, materials) {
            state.materials.push(...materials);
        },
        // -- payments state

        /**
         * Store detailed payment 
         * from REST GET `payment/${id}`
         * @param {*} state 
         * @param {*} data 
         */
        STORE_PAYMENT(state, data) {
            let payment = data.data;
            if (data.extra) {
                payment = Object.assign({}, payment, data.extra);
            }
            
            if (state.payments.length === 0) {
                state.payments.push(payment);
            } else {
                const _i = state.payments.findIndex(p => p.id === payment.id);
                if (_i === -1) {
                    state.payments.push(payment);
                } else {
                    Vue.set(state.payments, _i, payment);
                }
            }

        },
        NEW_PAYMENT(state, payment) {
            state.payments.push(payment);
        },
        STORE_MUTIPLE_PAYMENTS(state, payments) {
            state.payments.push(...payments);
        },
        REMOVE_PAYMENTS(state, ids) {
            if (ids instanceof Array) {
                ids.forEach(id => {
                    Vue.delete(state.payments, id);
                });
            }
        },
        SET_CURRENT_PAGE_META ( state, meta) {
            state.page = Object.assign({}, state.page, meta);
        }
    },
});

export default store;