import { helpers } from './../../bootstrap';

const namespaced = true;
const state = {
    data: [],
    loaded: false,
    treeLoaded: false,
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
    'tree': state => {
        let _materials = [];
        for (let i = 0; i < state.data.length; i++) {
            if (state.data[i].has_children) {
                let _m = state.data[i];
                _m.children = [];
                for (let j = i + 1; j < state.data.length; j++) {
                    if (state.data[j].parent_id === _m.id) {
                        _m.children.push(state.data[j]);
                    } else {
                        break;
                    }
                }
                _materials.push(_m);
            }
        }
        return _materials;
    }
}
const actions = {
    'storeMaterials': ({commit}, data) => {
        commit("STORE_MATERIALS", data);
    },
    'getTree': async({state, commit}) => {
        if (!state.treeLoaded) {
            const response = await helpers.axios.get(`material`);
            if (response.status === 200) {
                commit('STORE_TREE', response.data.data);
            }
        }
        return true;
    }
}
const mutations = {
    STORE_TREE(state, tree) {
        const oldData = state.data;
        for (let i = oldData.length - 1; i >= 0; i--) {
            let index = tree.findIndex( m => m.id === oldData[i].id);
            if (index !== -1) {
                tree.splice(index, 1, oldData[i]);
            }
        }        
        state.data = tree;
        state.treeLoaded = true;
    },
    STORE_MATERIALS(state, materials) {
        for (let i = materials.length - 1; i >= 0; i--) {
            let index = state.data.findIndex( m => m.id === materials[i].id);
            if (index === -1) {
                state.data.push(materials[i]);
            } else {
                const new_material = Object.assign({}, state.data[index], materials[i]);
                state.data.splice(index, 1, new_material);
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