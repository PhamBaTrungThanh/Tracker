import { helpers } from './../../bootstrap';

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
            let payments = await dispatch("payment/getPaymentsForInvoice", {'invoice_id': invoice_id}, {root: true});
        } catch (error) {
            console.log(error);
        }
    },
    'getSingleInvoiceInstance': async ({getters, commit}, {invoice_id}) => {
        try {
            let invoice = getters.invoice(invoice_id);
            if (!invoice) {
                const response = await helpers.axios.get(`invoice/${invoice_id}`);
                invoice = response.data.data;
                commit('STORE_SINGLE_INVOICE', invoice);
                
            }
            console.log(invoice);
        } catch (e) {
            console.log(e);
        }
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