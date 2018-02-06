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
    'getProviders': async ({getters, commit}) => {
        
        if (helpers.isEmptyArray(getters.providers)) {
            try {
                const _providers = document.querySelector("meta[name='_providers']").getAttribute('content');
                if (_providers) {
                    commit('STORE_PROVIDERS', JSON.parse(unescape(_providers)));
                } else {
                    const response = await helpers.axios.get('provider');
                    commit('STORE_PROVIDERS', response.data.data);    
                }
           
            } catch (e) {
                console.log(e);
            }
        }
    },   
    'store': ({commit}, data) => {
        commit('STORE_SINGLE_PROVIDER', data);
    } 
}
const mutations = {
    STORE_SINGLE_PROVIDER(state, data) {
        state.data.push(data);
    },
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