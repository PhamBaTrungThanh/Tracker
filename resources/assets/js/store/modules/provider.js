import { helpers } from './../../bootstrap';

const namespaced = true;
const state = {
    data: [],
}
const getters = {
    'providers': state => state.data,
    'provider': state => id => state.data.find( p => p.id === id)
}
const actions = {
    'getProviders': async ({state, commit}) => {
        if (!state.data) {
            try {
                const response = await helpers.axios.get('provider');
                commit('STORE_PROVIDERS', response.data.data);
            } catch (e) {
                console.log(e);
            }
        }

    }
    
}
const mutations = {
    STORE_PROVIDERS(state, providers) {
        state.data = providers;
    }
}
export default {
    namespaced,
    state,
    getters,
    actions,
    mutations,
}