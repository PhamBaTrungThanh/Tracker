
import Vue from 'vue';
import Vuex from 'vuex';

import { helpers } from './../bootstrap';

import invoice from "./modules/invoice";
import user from "./modules/user";
import provider from "./modules/provider";
import work from "./modules/work";
import payment from "./modules/payment";
import receive from "./modules/receive";
import material from "./modules/material";
import tracker from "./modules/tracker";
import boq from "./modules/boq";
import task from "./modules/task";
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        invoice,
        user,
        provider,
        work,
        payment,
        receive,
        tracker,
        material,
        boq,
        task,
    },
    strict: debug,
});