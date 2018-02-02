import { helpers } from './../../bootstrap';

const namespaced = true;
const state = {
    data: [],
    loaded: false,
}
const getters = {
    'paymentsForInvoice': state => id => state.data.reduce( (payments, payment) => {
        if (payment.invoice_id === id) {
            payments.push(payment);
        }
        return payments;
    }, []),
    'payment': state => id => state.data.find( i => i.id === id),
}
const actions = {

    'getPaymentsForInvoice': async ({commit, getters}, {invoice_id}) => {
        try {
            let payments = getters.paymentsForInvoice(invoice_id);
            const inHand = payments.map( i => i.id ).join(",");
            const response = await helpers.axios.get(`invoice/${invoice_id}/payments`, {
                params: {
                    'disclude': (inHand) ? inHand : undefined,
                },
                
            });
            if (response.data.data) {
                commit('STORE_PAYMENTS', response.data.data);
            }
            return response.data.data;
        } catch (e) {
            console.log(e);
        }
    },
    'getRelatedInvoice': ({dispatch, rootGetters}, {invoice_id}) => {
        const invoice = rootGetters["invoice/invoice"](invoice_id);
        if (!invoice) {
            dispatch("invoice/getSingleInvoiceInstance", {'invoice_id': invoice_id}, {root: true});
            return false;
        }
        return invoice;
    },
    'getSinglePaymentInstance': async ({state, commit, dispatch}, {payment_id}) => {
        /* what we need */
        let payment = state.data.find( p => p.id === payment_id);
        if (!payment || payment.full_load === false) {
            let response = false;
            try {
                response = await helpers.axios.get(`payment/${payment_id}`);
            } catch (e) {
                console.log(e);
            } finally {
                if (response.status === 200) {
                    
                    const _payment = Object.assign({}, response.data.data, response.data.extra);
                    commit('STORE_SINGLE_PAYMENT', {'data': _payment, 'is_new': (payment) ? false : true});       
                }
            }
        }
    }
}
const mutations = {

    STORE_SINGLE_PAYMENT(state, data) {
        if (data.is_new) {
            state.data.push(data.data);
        } else {
            const index = state.data.findIndex( p => p.id === data.data.id);
            state.data.splice(index, 1, data.data);
        }
    },
    STORE_PAYMENTS: (state, payments) => {
        
        for (let i = payments.length - 1; i >= 0; i--) {
            
            if ((state.data.findIndex( payment => payment.id === payments[i].id)) === -1) {
                state.data.push(payments[i]);
            }
        }
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}