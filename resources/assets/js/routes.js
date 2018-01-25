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
                        path: ":id",
                        name: "work.show",
                        component: () => import('./components/Work/Show.vue'),
                    }, {
                        path: ":id/edit",
                        name: "work.edit",
                        component: () => import('./components/Work/Edit.vue'),
                    }, {
                        path: ":id/report",
                        name: "work.report",
                        component: () => import("./components/Work/Report.vue"),
                    }, {
                        path: "",
                        name: "work.index",
                        component: () => import('./components/Work/Index.vue'),
                    }
                ],
            }, {
                path: "invoice",
                component: () => import("./components/Invoice/Base.vue"),
                children: [
                    {
                        path: "",
                        name: "invoice.index",
                        component: () => import("./components/Invoice/Index.vue"),
                    }, 
                    {
                        path: "create",
                        name: "invoice.create",
                        component: () => import("./components/Invoice/Create.vue"),
                    },
                    {
                        path: ":id",
                        name: "invoice.show",
                        component: () => import("./components/Invoice/Show.vue"),
                    },
                    {
                        path: ":id/edit",
                        name: "invoice.edit",
                        component: () => import("./components/Invoice/Edit.vue"),
                    },
                ]
            }, {
                path: "payment",
                component: () => import("./components/Payment/Base.vue"),
                children: [
                    {
                        path: "",
                        name: "payment.index",
                        component: () => import("./components/Payment/Index.vue"),
                    }, {
                        path: "create",
                        name: "payment.create",
                        component: () => import("./components/Payment/Create.vue"),
                    }, {
                        path: ":id",
                        name: "payment.show",
                        component: () => import("./components/Payment/Show.vue"),
                    }, {
                        path: ":id/edit",
                        name: "payment.edit",
                        component: () => import("./components/Payment/Edit.vue"),                    
                    }
                ]
            }, {
                path: "receive",
                component: () => import("./components/Receive/Base.vue"),
                children: [
                    {
                        path: "",
                        name: "receive.index",
                        component: () => import("./components/Receive/Index.vue"),
                    }, {
                        path: "create",
                        name: "receive.create",
                        component: () => import("./components/Receive/Create.vue"),
                    }, {
                        path: ":id",
                        name: "receive.show",
                        component: () => import("./components/Receive/Show.vue"),
                    }, {
                        path: ":id/edit",
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