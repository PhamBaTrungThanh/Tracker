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
    'children': state => parent_id => state.data.reduce ( (materials, material) => {
        if (material.parent_id === parent_id) {
            materials.push(material);
        }
        return materials;
    }, []),
    'tree': state => {
        let _materials = [];
        let _walker = (index) => {

            let _m = state.data[index];
            if (_m.has_children) {
                _m.children = [];
                for (let j = index + 1; j < state.data.length; j++) {
                    if (state.data[j].parent_id === _m.id) {
                        _m.children.push(_walker(j));
                    } else {
                        break;
                    }
                }
            }

            return _m;
        }

        return _walker(0);
    },
    'flatList': ({state, getters}) => id => {
        let _materials = [];
        let _program = (data) => {
            let _m = [];
            _m.push(data);
            if (data.children) {
                for (let i = 0; i < data.children.length; i++) {
                    _m.push(..._program(data.children[i]));
                }
            } 
            return _m;
        }

        let _nested = (data) => {
            let _m = [];
            m.push(data);
            if (data.has_children) {

            }
            return _m;
        }
        
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
                tree.splice(index, 1, Object.assign({}, tree[index], oldData[i]));
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