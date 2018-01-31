import { helpers } from './../../bootstrap';

const namespaced = true;
const state = {
    data: [],
    loaded: false,
}
const getters = {
    'materialsForInvoice': state => id => state.data.reduce( (materials, material) => {
        if (material.invoice_id === id) {
            materials.push(material);
        }
        return materials;
    }, []),
}
const actions = {
    'storematerials': ({commit}, data) => {
        commit("STORE_MUTIPLE_MATERIALS", data);
    }
}
const mutations = {
    STORE_MUTIPLE_MATERIALS(state, data) {
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