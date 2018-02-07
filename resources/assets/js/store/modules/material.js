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
        let _materials = state.data;
        if (_materials.length === 0) {
            return [];
        } else {
            let _maxDepth = _materials.reduce( (max, m) => max > m.depth ? max : m.depth);
            for (let i = _maxDepth; i >= 1; i--) {
                // get all the parents
                let _parents = _materials.reduce( (materials, material) => {
                    if (material.depth === i - 1) {
                        materials.push(material);
                    }
                    return materials;
                }, []);
                
                for (let j = _parents.length - 1; j >= 0; j--) {
                    if (_parents[j].has_children) {
                        _parents[j].children = _materials.reduce( (materials, material) => {
                            if (material.parent_id === _parents[j].id) {
                                materials.push(material);
                            }
                            return materials;
                        }, []);
                        
                    }
                }
                // Get all left;
                if (i > 0) {
                    let _unused = _materials.reduce( (materials, material) => {
                        if (material.depth === i - 2) {
                            materials.push(material);
                        }
                        return materials;
                    }, []);
                    _materials = [..._parents, ..._unused];
                } else {
                    _materials = _parents;
                }
    
            }
            return _materials;
        }

    },

}
const actions = {
    'storeMaterials': ({commit}, data) => {
        commit("STORE_MATERIALS", data);
    },
    'affected': ({commit}, data) => {
        commit("STORE_MATERIALS", data);
    },
    'getTree': async({state, commit, dispatch}, {work_id}) => {
        if (!state.treeLoaded) {
            const response = await helpers.axios.get(`work/${work_id}/materials`);
            if (response.status === 200) {
                commit('STORE_TREE', response.data.data);
                if (response.data.boqs) {
                    dispatch("boq/storeBoqsFromTree", response.data.boqs, {root: true});
                }
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