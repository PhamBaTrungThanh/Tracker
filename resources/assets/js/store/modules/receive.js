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
    'store': async ({commit, dispatch}, {data}) => {
        try {
            let response = await helpers.axios.post("receive", data);
            if (response.status === 200) {
                commit("STORE_RECEIVES", response.data.data);
                dispatch("material/affected", response.data.affected.materials, {root: true});
                dispatch("tracker/affected", response.data.affected.trackers, {root: true});
                return true;
            }

        } catch (e) {
            console.log(e);
        }
    },
    'getReceivesForInvoice': async ({commit, getters}, {invoice_id}) => {
        try {
            let receives = getters.receivesForInvoice(invoice_id);
            const inHand = receives.map( i => i.id ).join(",");
            const response = await helpers.axios.get(`invoice/${invoice_id}/receives`, {
                params: {
                    'disclude': (inHand) ? inHand : undefined,
                },
                
            });
            if (response.data.data) {
                let receives = [];
                for (let i = response.data.data.length - 1; i >= 0; i--) {
                    let receive = response.data.data[i];
                    
                    receive.units = [];
                    for (let j = response.data.pivot.length - 1; j >= 0; j--) {
                        if (response.data.pivot[j].receive_id === receive.id) {
                            receive.units.push(response.data.pivot[j]);
                        }
                    } 
                    receives.push(receive);
                }

                commit('STORE_RECEIVES', receives);
            }
        } catch (e) {
            console.log(e);
        }
    }
}
const mutations = {
    STORE_RECEIVES: (state, receives) => {
        
        for (let i = receives.length - 1; i >= 0; i--) {
            const index = state.data.findIndex( receive => receive.id === receives[i].id);
            if (index === -1) {
                state.data.push(receives[i]);
            } else {
                state.data.splice(index, 1, receives[i] );
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