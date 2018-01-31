import { helpers } from './../../bootstrap';

const namespaced = true;
const state = {
    data: {}
}
const getters = {
    'user': state => state.data,
}
const actions = {
    'getUser': async ({getters, commit}) => {
        if (helpers.isEmptyObject(getters.user)) {
            try {
                const _meta = document.querySelector("meta[name='_user']").getAttribute('content');
                if (_meta) {
                    commit('STORE_USER', JSON.parse(unescape(_meta)));
                } else {
                    const response = await helpers.axios.get('user');
                    commit('STORE_USER', response.data.data);
                }

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