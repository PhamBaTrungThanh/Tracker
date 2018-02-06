import { helpers } from './../../bootstrap';
import payment from './payment';

const namespaced = true;
const state = {
    data: [],
}
const getters = {
    'invoice': state => id => state.data.find( i => i.id === id),
    'invoicesInWork': state => id => state.data.reduce( (invoices, invoice) => {
        if (invoice.work_id === id) {
            invoices.push(invoice);
        }
        return invoices;
    }, []),
}
const actions = {
    'storeInvoices': ({commit}, data) => {
        commit('STORE_INVOICES', data);
    },
    'getInvoicesForWork': async ({getters, commit, rootGetters}, {work_id}) => {
        try {
            let invoices = getters.invoicesInWork(work_id);
            const inHand = invoices.map( i => i.id ).join(",");
            const response = await helpers.axios.get(`work/${work_id}/invoices`, {
                params: {
                    'disclude': (inHand) ? inHand : undefined,
                },
                
            });
            if (response.data.data) {
                commit('STORE_INVOICES', response.data.data);
            }
            return response.data.data;
        } catch (e) {
            console.log(e);
        }
    },
    'getRelatedPayments': ({getters, dispatch, rootGetters}, {invoice_id}) => {
        try {
            const invoice = getters.invoice(invoice_id);
            if (invoice) {
                let payments = rootGetters["payment/paymentsForInvoice"](invoice_id);
                if (payments.length === invoice.payments_count) {
                    return;
                }                
            }
            dispatch("payment/getPaymentsForInvoice", {'invoice_id': invoice_id}, {root: true});
        } catch (error) {
            console.log(error);
        }
    },
    'getRelatedReceives': ({getters, dispatch, rootGetters}, {invoice_id}) => {
        try {
            const invoice = getters.invoice(invoice_id);
            if (invoice) {
                let receives = rootGetters["receive/receivesForInvoice"](invoice_id);
                if (receives.length === invoice.receives_count) {
                    return;
                }                
            }
            dispatch("receive/getReceivesForInvoice", {'invoice_id': invoice_id}, {root: true});
        } catch (error) {
            console.log(error);
        }
    },
    'getRelatedTrackers': ({getters, dispatch, rootGetters}, {invoice_id}) => {
        try {
            const invoice = getters.invoice(invoice_id);
            if (invoice) {
                let trackers = rootGetters["tracker/trackersForInvoice"](invoice_id);
                if (trackers.length === invoice.trackers_count) {
                    return;
                }                
            }
            dispatch("tracker/getTrackersForInvoice", {'invoice_id': invoice_id}, {root: true});
        } catch (error) {
            console.log(error);
        }
    },
    'getRelatedWork': ({dispatch, rootGetters}, {work_id}) => {
        try {
            const work = rootGetters["work/work"](work_id);
            if (!work) {
                dispatch("work/getWorks", null, {root: true});
            }
        } catch (error) {
            console.log(error);
        }
    },
    'getSingleInvoiceInstance': async ({state, commit, rootGetters, dispatch}, {invoice_id}) => {


        let invoice = state.data.find( i => i.id === invoice_id);
        if (!invoice) {
            
            let response = false;
            try {
                response = await helpers.axios.get(`invoice/${invoice_id}`);
            } catch (e) {
                console.log(e);
            } finally {
                if (response.status === 200) {
                    commit('STORE_SINGLE_INVOICE', response.data.data);       
                }
            }
        }
    },
    'delete': async ({commit}, {invoice_id}) => {
        const response = await helpers.axios.delete(`invoice/${invoice_id}`);
        if (response.status === 200) {
            commit('DELETE_INVOICE', invoice_id);
        }
    },
    'store': ({commit}, invoice) => {
        commit('STORE_SINGLE_INVOICE', invoice);
    }
}
const mutations = {
    DELETE_INVOICE(state, invoice_id) {
        const index = state.data.findIndex( i => i.id === invoice_id);
        state.data.splice(index, 1);
    },
    STORE_INVOICES(state, invoices) {

        for (let i = invoices.length - 1; i >= 0; i--) {
            
            if ((state.data.findIndex( invoice => invoice.id === invoices[i].id)) === -1) {
                state.data.push(invoices[i]);
            }
        }
    },
    STORE_SINGLE_INVOICE(state, invoice) {
        state.data.push(invoice);
    }
}
export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}