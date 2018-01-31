import { helpers } from './../../bootstrap';

const namespaced = true;
const state = {
    data: [],
    loaded: false,
}
const getters = {
    'trackersForInvoice': state => id => state.data.reduce( (trackers, tracker) => {
        if (tracker.invoice_id === id) {
            trackers.push(tracker);
        }
        return trackers;
    }, []),
}
const actions = {
    'storeTrackers': ({commit}, data) => {
        commit("STORE_MUTIPLE_TRACKERS", data);
    }
}
const mutations = {
    STORE_MUTIPLE_TRACKERS(state, data) {
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