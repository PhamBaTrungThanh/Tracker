const async = (store, router) => {
    store.registerModule('async', {
        'namespaced': true,
        'state': {
            'loading': false,
        },
        'mutation': {
            'STATE_LOADING': (state) => state.loading = true,
            'STATE_COMPLETE': state => state.loading = false,
        }
    });
    // sync store on router navigation
    const afterEachUnHook = router.afterEach((to, from) => {
        if (to.params.invoice_id) {}
    });
}


export default async;