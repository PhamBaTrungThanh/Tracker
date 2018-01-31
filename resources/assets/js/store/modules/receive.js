import { helpers } from './../../bootstrap';

const namespaced = true;
const state = {
    data: [],
    loaded: false,
}
const getters = {
    'receivesForInvoice': state => id => state.data.reduce( (receives, receive) => {
        if (receive.invoice_id === id) {
            receives.push(receive);
        }
        return receives;
    }, []),
}
const actions = {
    'storeReceives': ({commit}, data) => {
        commit("STORE_MUTIPLE_RECEIVES", data);
    }
}
const mutations = {
    STORE_MUTIPLE_RECEIVES(state, data) {
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