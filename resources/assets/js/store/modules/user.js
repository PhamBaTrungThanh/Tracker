import { helpers } from './../../bootstrap';

const namespaced = true;
const state = {
    data: {},
}
const getters = {
    'user': state => state.data,
}
const actions = {
    'getUser': async ({getters, commit}) => {
        if (!getters.user) {
            try {
                const response = await helpers.axios.get('user');
                commit('STORE_USER', response.data.data);
            } catch (e) {
                console.log(e);
            }
        }

    }
    
}
const mutations = {
    STORE_USER(state, user) {
        state.data = user;
    }
}
export default {
    namespaced,
    state,
    getters,
    actions,
    mutations,
}