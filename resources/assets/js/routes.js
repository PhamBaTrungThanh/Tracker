const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import('./components/Login.vue'),
        meta: {
            title: "Đăng nhập",
        },
    },
    {
        path: "/",
        name: "base",
        component: () => import('./components/Base.vue'),
        children: [
            {
                path: "dashboard",
                name: "base.dashboard",
                component: () => import('./components/Dashboard.vue'),
                meta: {
                    title: "Bảng thông báo"
                }
            }, {
                path: "works",
                name: "base.works",
                component: () => import('./components/Works.vue'),
                meta: {
                    title: "Danh sách công trường",
                }
            }, {
                path: "work/:id",
                name: "base.workReport",
                component: () => import('./components/WorkReport.vue'),
                meta: {
                    title: "Báo cáo chi tiết",
                }
            }, {
                path: "materials",
                name: "base.materials",
                component: () => import("./components/Materials.vue"),
                meta: {
                    title: "Danh sách vật tư"
                }
            }, {
                path: "invoice",
                name: "invoice.base",
                component: () => import("./components/Invoice/Base.vue"),
                meta: {
                    title: "Hóa Đơn",
                },
                children: [
                    {
                        path: ":id",
                        name: "invoice.show",
                        component: () => import("./components/Invoice/Show.vue"),
                        meta: {
                            title: "Chi tiết hóa đơn",
                        },
                    }, {
                        path: "",
                        name: "invoice.index",
                        component: () => import("./components/Invoice/Index.vue"),
                        meta: {
                            title: "Hóa đơn",
                        }, 
                    }
                ]
            },
        ],
    },

    
];
export default routes;