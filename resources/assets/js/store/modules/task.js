import { helpers } from './../../bootstrap';
import * as moment from 'moment';
const namespaced = true;
const state = {
    data: [],
    
    loaded: false,
}
const getters = {
    'isLoaded': state => state.loaded,
    'today': (state, rootGetters) => user_id => {
        let today = [];
        let todayTime = moment().format("DD/MM/YYYY");
        today = state.data.reduce( (tasks, task) => {
            if (task.user_id === user_id && task.created_at === todayTime) {
                tasks.push(task);
            }
            return tasks;
        }, []);
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
                commit('STORE_TASKS', response.data.data);
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
    'delete': async ({commit}, ids) => {
        try {
            const response = await helpers.axios.delete(`task/delete`, {
                params: {
                    'ids': ids.join(","),
                }
            });
            if (response.status === 200) {
                commit("DELETE_TASKS_BY_IDS", ids);
                return true;
            }
        } catch (error) {
            console.log(error);
        }
    },
    'today': async ({ getters, commit}, {user_id}) => {
        
        try {
            const _today = getters.today(user_id);
            
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
            return _today;
            
        } catch (error) {
            console.log(error);

        }
    },

}
const mutations = {
    STORE_TASKS: (state, tasks) => {
        
        for (let i = tasks.length - 1; i >= 0; i--) {
            const index = state.data.findIndex( task => task.id === tasks[i].id);
            if (index === -1) {
                state.data.push(tasks[i]);
            } else {
                state.data.splice(index, 1, tasks[i]);
            }
            
        }
    },
    SET_LOADED: (state) => {
        state.loaded = true;
    },
    DELETE_TASKS_BY_IDS: (state, ids) => {
        for (let i = ids.length - 1; i >= 0; i--) {
            const index = state.data.findIndex( task => task.id === ids[i]);
            if (index !== -1) {
                state.data.splice(index, 1);
            }
        }       
    },
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}