
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
    },
    actions: {
        getData({dispatch}) {
            helpers.axios.get(`data`).then(response => {
            
                dispatch("work/storeWorks", response.data.works, {root: true});
                dispatch("work/storeProviders", response.data.providers, {root: true});
                dispatch("work/storeInvoices", response.data.invoices, {root: true});
                dispatch("work/storePayments", response.data.payments, {root: true});
                dispatch("work/storeReceives", response.data.receives, {root: true});
                dispatch("work/storeMaterials", response.data.materials, {root: true});
                dispatch("work/storeTrackers", response.data.trackers, {root: true});

            });
        }
    },
    strict: debug,
});