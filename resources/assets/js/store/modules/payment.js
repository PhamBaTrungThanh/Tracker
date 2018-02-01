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
}
const actions = {
    'storePayments': ({commit}, data) => {
        commit("STORE_MUTIPLE_PAYMENTS", data);
    },
    'getPaymentsForInvoice': async ({commit, getters}, {invoice_id}) => {
        try {
            let payments = getters.paymentsForInvoice(invoice_id);
            const inHand = payments.map( i => i.id ).join(",");
            const response = await helpers.axios.get(`invoice/${invoice_id}/payments`, {
                params: {
                    'disclude': inHand,
                },
                
            });
            if (response.data.data) {
                commit('STORE_PAYMENTS', response.data.data);
            }
            return response.data.data;
        } catch (e) {
            console.log(e);
        }
    }
}
const mutations = {
    STORE_MUTIPLE_PAYMENTS(state, data) {
        state.data.push(...data);
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