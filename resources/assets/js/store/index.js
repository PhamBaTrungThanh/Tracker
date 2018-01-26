
import Vue from 'vue'
import Vuex from 'vuex'

import invoice from "./modules/invoice";
import user from "./modules/user";
import provider from "./modules/provider";
import work from "./modules/work";

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        invoice,
        user,
        provider,
        work,
    },

    strict: debug,
});