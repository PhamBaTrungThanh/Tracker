import { helpers } from './../../bootstrap';

const namespaced = true;
const state = {
    data: [],
    loaded: false,
}
const getters = {
    'work': state => id => state.data.find( i => i.id === id),
    'works': state => state.data,
}
const actions = {
    'getWorks': async ({getters, commit}) => {
        try {
            const works = getters.works;       
            if (works.length === 0) {
                const response = await helpers.axios(`work`);
                if (response.data.data) {
                    commit('STORE_WORKS', response.data.data);
                    return response.data.data;
                }
            } else {
                return works;
            }

        } catch (e) {
            console.log(e);
        }        
    },
    'getRelatedInvoices': async ({state, getters, commit, dispatch, rootGetters, rootCommit}, {work_id}) => {
        try {
            const invoices = rootGetters['invoice/invoicesInWork'](work_id);
            const work = state.data.find( w => w.id === work_id);
           
            if (work) {
                if (invoices.length === work.invoices_count) {
                    return invoices;
                }
            }
            let requestInvoices = await dispatch('invoice/getInvoicesForWork', {'work_id': work_id}, {root: true});
            return requestInvoices;

        } catch (e) {
            console.log(e);
        }
    },
    'getWork': async ({getters, commit, dispatch, rootGetters}, {work_id}) => {
        let work = getters.work(work_id);
        if (!work) {
            await dispatch("getWorks");
        }
        return work;
    },
    'storeWorks': async ({commit}, data) => {
        commit('STORE_WORKS', data);
    }

}
const mutations = {
    STORE_WORKS(state, works) {
        state.data = works;
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}