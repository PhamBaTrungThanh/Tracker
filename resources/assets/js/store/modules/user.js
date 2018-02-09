import { helpers } from './../../bootstrap';

const namespaced = true;
const state = {
    currentUser: {},
    data: [],
}
const getters = {
    'user': state => state.currentUser,
    'users': state => state.data,
}
const actions = {
    'store': async ({commit}, user) => {
        try {
            const response = await(helpers.axios.post(`user`, user))
            if (response.status === 200) {
                commit('STORE_USER', user);
                return true;
            }
        } catch (error) {
            
        }
    },
    'getAll': async ({commit}) => {
        try {
            const response = await(helpers.axios.get('user/all'));
            if (response.status === 200) {
                commit('STORE_ALL_USERS', response.data.data);
                return true;
            }
        } catch (e) {
            console.log(e);
        }

    },
    'getUser': async ({getters, commit}) => {
        
        if (helpers.isEmptyObject(getters.user)) {
            try {
                const _meta = document.querySelector("meta[name='_user']").getAttribute('content');
                
                if (_meta) {
                    commit('STORE_SINGLE_USER', JSON.parse(unescape(_meta)));
                } else {
                    const response = await helpers.axios.get('user');
                    commit('STORE_SINGLE_USER', response.data.data);
                }

            } catch (e) {
                console.log(e);
            }
        }
    }
}
const mutations = {
    STORE_SINGLE_USER(state, user) {
        state.currentUser = user;
    },
    STORE_ALL_USERS(stata, data) {
        state.data = data;
    },
    STORE_USER(state, user) {
        state.data.push(user);
    }

}
export default {
    namespaced,
    state,
    getters,
    actions,
    mutations,
}