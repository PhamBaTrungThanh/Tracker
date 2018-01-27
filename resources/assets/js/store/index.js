
import Vue from 'vue'
import Vuex from 'vuex'

import invoice from "./modules/invoice";
import user from "./modules/user";
import provider from "./modules/provider";
import work from "./modules/work";
import payment from "./modules/payment";
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        invoice,
        user,
        provider,
        work,
        payment,
    },
    actions: {
        getData({state}) {
            console.log(state.route.params);
        }
    },
    strict: debug,
});