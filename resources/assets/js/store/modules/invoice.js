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
                'not_in': inHand,
            });
            if (response.data.data) {
                commit('STORE_INVOICES', response.data.data);
            }
            return response.data.data;
        } catch (e) {
            console.log(e);
        }
    },
    'getRelatedPayments': async ({getters, dispatch}, {invoice_id, expect}) => {
        try {
            let payments = getters["payment/getPaymentsForInvoice"]({'invoice_id': invoice_id});
            if (payments.length !== expect) {
                await dispatch("payment/getPaymentsForInvoice", {'invoice_id': invoice_id});
            }
            return payments;
            
        } catch (error) {
            console.log(error);
        }
    },
    'getSingleInvoiceInstance': async ({getters, commit, rootGetters, dispatch}, {invoice_id}) => {

        let payments = rootGetters["payment/paymentsForInvoice"](invoice_id);

        let invoice = getters.invoice(invoice_id);
        if (!invoice) {
            
            let response = false;
            try {
                response = await helpers.axios.get(`invoice/${invoice_id}`, {
                    'params': {
                        'without_payments': payments.map( p => p.id).join(",")
                    }
                });
            } catch (e) {
                console.log(e);
            } finally {
                if (response) {
                    if (response.data.related.payments) {
                        dispatch("payment/storePayments", response.data.related.payments, {root: true});
                    }
                    commit('STORE_SINGLE_INVOICE', response.data.data);    

                    return Object.assign({}, response.data.data, {payments: payments});       
                }
            }
            //invoice = response.data.data;

        } else {

            let params = {
                without_payments: undefined,
                without_receives: undefined,
            }
            if (payments.length !== invoice.payments_count) {
                params.without_payments = payments.map( p => p.id).join(",");
            }
            const response = await helpers.axios.get(`invoice/${invoice_id}/related`, {'params': params});
            if (response.data.related.payments) {
                dispatch("payment/storePayments", response.data.related.payments, {root: true});
            }
        }
        return Object.assign({}, invoice, {payments: payments});
    }
    
}
const mutations = {
    STORE_INVOICES(state, invoices) {
        state.data.push(...invoices);
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