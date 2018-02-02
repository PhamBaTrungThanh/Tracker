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
    'materials': state => state.data,
    'material': state => id => state.data.find( m => m.id === id),
}
const actions = {
    'storeMaterials': ({commit}, data) => {
        commit("STORE_MATERIALS", data);
    }
}
const mutations = {
    STORE_MATERIALS(state, materials) {
        for (let i = materials.length - 1; i >= 0; i--) {
            
            if ((state.data.findIndex( m => m.id === materials[i].id)) === -1) {
                state.data.push(materials[i]);
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