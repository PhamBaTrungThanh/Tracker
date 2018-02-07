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
    },
    'affected': ({commit}, data) => {
        commit("STORE_TRACKERS", data);
    },
    'getTrackersForInvoice': async ({commit, getters, dispatch}, {invoice_id}) => {
        try {
            let trackers = getters.trackersForInvoice(invoice_id);
            const inHand = trackers.map( i => i.id ).join(",");
            const response = await helpers.axios.get(`invoice/${invoice_id}/trackers`, {
                params: {
                    'disclude': (inHand) ? inHand : undefined,
                    'include': 'materials',
                },
            });
            if (response.data.data) {
                commit('STORE_TRACKERS', response.data.data);
            }
            if (response.data.materials) {
                dispatch("material/storeMaterials", response.data.materials, {root: true});
            }
            return response.data.data;
        } catch (e) {
            console.log(e);
        }
    }
}
const mutations = {
    STORE_TRACKERS(state, trackers) {
        for (let i = trackers.length - 1; i >= 0; i--) {
            
            if ((state.data.findIndex( tracker => tracker.id === trackers[i].id)) === -1) {
                state.data.push(trackers[i]);
            }
        }
    },
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