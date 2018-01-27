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
    }
}
const mutations = {
    STORE_MUTIPLE_PAYMENTS(state, data) {
        state.data.push(...data);
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}