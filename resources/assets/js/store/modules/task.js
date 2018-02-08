import { helpers } from './../../bootstrap';
import * as moment from 'moment';
const namespaced = true;
const state = {
    data: [],
    
    loaded: false,
}
const getters = {
    'isLoaded': state => state.loaded,
    'today': (state, rootGetters) => {
        let today = [];
        let todayTime = moment().format("DD/MM/YYYY");

        const user = rootGetters["user/user"];
        if (user) {
            today = state.data.reduce( (tasks, task) => {
                if (task.user_id === user.id && task.created_at === todayTime) {
                    tasks.push(task);
                }
                return tasks;
            }, []);
        }
        return today;
    },
}
const actions = {
    'store': async ({commit}, tasks) => {
        
        try {
            const response = await helpers.axios.post(`task`, {
                'tasks': tasks
            });
            if (response.status === 200) {
                return response.data.data;
            }
        } catch (e) {
            console.log(e);
        }
    },
    'update': async ({commit}, tasks) => {
        try {
            const response = await helpers.axios.patch(`task/update`, {
                'tasks': tasks
            });
            if (response.status === 200) {
                commit('STORE_TASKS', response.data.data);
                return response.data.data;
            }
        } catch (e) {
            console.log(e);
        }
    },
    'today': async ({ getters, commit}) => {
        
        try {
            const _today = getters.today;
            
            if (_today.length === 0) {
                if (!getters.isLoaded) {
                    const response = await helpers.axios.get(`task/today`);
                    if (response.status === 200) {
                        commit('SET_LOADED');
                        commit('STORE_TASKS', response.data.data);
                        return response.data.data;
                    }
                } else {
                    return [];
                }
            }
            
        } catch (error) {
            console.log(error);

        }
    },

}
const mutations = {
    STORE_TASKS: (state, tasks) => {
        
        for (let i = tasks.length - 1; i >= 0; i--) {
            
            if ((state.data.findIndex( task => task.id === tasks[i].id)) === -1) {
                state.data.push(tasks[i]);
            }
        }
    },
    SET_LOADED: (state) => {
        state.loaded = true;
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}