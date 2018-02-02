const routes = [
    {
        path: "/",
        component: () => import('./components/Wrapper.vue'),
        children: [
            {
                path: "dashboard",
                name: "root.dashboard",
                component: () => import('./components/Dashboard.vue'),
            }, {
                path: "work",
                component: () => import('./components/Work/Base.vue'),
                children: [
                    { 
                        path: "create",
                        name: "work.create",
                        component: () => import('./components/Work/Create.vue'),
                    }, {
                        path: ":work_id",
                        name: "work.show",
                        component: () => import('./components/Work/Show.vue'),
                    }, {
                        path: ":work_id/edit",
                        name: "work.edit",
                        component: () => import('./components/Work/Edit.vue'),
                    }, {
                        path: ":work_id/report",
                        name: "work.report",
                        component: () => import("./components/Work/Report.vue"),
                    }, {
                        path: "",
                        name: "work.index",
                        component: () => import('./components/Work/Index.vue'),
                    }
                ],
            }, {
                path: "work/:work_id/invoice",
                component: () => import("./components/Invoice/Base.vue"),
                children: [
                    {
                        path: "create",
                        name: "invoice.create",
                        component: () => import("./components/Invoice/Create.vue"),
                    },
                    {
                        path: ":invoice_id",
                        name: "invoice.show",
                        component: () => import("./components/Invoice/Show.vue"),
                    },
                    {
                        path: ":invoice_id/edit",
                        name: "invoice.edit",
                        component: () => import("./components/Invoice/Edit.vue"),
                    },
                ]
            }, {
                path: "work/:work_id/invoice/:invoice_id/payment",
                component: () => import("./components/Payment/Base.vue"),
                children: [
                    {
                        path: "create",
                        name: "payment.create",
                        component: () => import("./components/Payment/Create.vue"),
                    }, {
                        path: ":payment_id",
                        name: "payment.show",
                        component: () => import("./components/Payment/Show.vue"),
                    }, {
                        path: ":payment_id/edit",
                        name: "payment.edit",
                        component: () => import("./components/Payment/Edit.vue"),                    
                    }
                ]
            }, {
                path: "work/:work_id/invoice/:invoice_id/receive",
                component: () => import("./components/Receive/Base.vue"),
                children: [
                    {
                        path: "create",
                        name: "receive.create",
                        component: () => import("./components/Receive/Create.vue"),
                    }, {
                        path: ":receive_id",
                        name: "receive.show",
                        component: () => import("./components/Receive/Show.vue"),
                    }, {
                        path: ":receive_id/edit",
                        name: "receive.edit",
                        component: () => import("./components/Receive/Edit.vue"),                     
                    }
                ]
            }, {
                path: "option",
                name: "option.index",
                component: () => import("./components/Option/Index.vue"),
            },

        ],
    },

    
];
export default routes;