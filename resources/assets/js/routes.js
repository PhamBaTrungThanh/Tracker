const routes = [
    {
        path: "/",
        component: () => import('./components/Wrapper.vue'),
        children: [
            {
                path: "dashboard",
                name: "root.dashboard",
                component: () => import('./components/Dashboard.vue'),
                meta: {
                    title: "Bảng thông báo"
                }
            }, {
                path: "work",
                component: () => import('./components/Work/Base.vue'),
                meta: {
                    title: "Công trường",
                },
                children: [
                    { 
                        path: "create",
                        name: "work.create",
                        component: () => import('./components/Work/Create.vue'),
                        meta: {
                            title: "Tạo công trình mới"
                        }
                    }, {
                        path: ":id",
                        name: "work.show",
                        component: () => import('./components/Work/Show.vue'),
                        meta: {
                            title: "Chi tiết công trình",
                        }
                    }, {
                        path: ":id/edit",
                        name: "work.edit",
                        component: () => import('./components/Work/Edit.vue'),
                        meta: {
                            title: "Chi tiết công trình",
                        }
                    }, {
                        path: ":id/report",
                        name: "work.report",
                        component: () => import("./components/Work/Report.vue"),
                        meta: {
                            title: "Báo cáo công trình"
                        }
                    }, {
                        path: "",
                        name: "work.index",
                        component: () => import('./components/Work/Index.vue'),
                        meta: {
                            title: "Danh sách công trình"
                        }
                    }
                ],
            }, {
                path: "invoice",
                component: () => import("./components/Invoice/Base.vue"),
                meta: {
                    title: "Hóa Đơn",
                },
                children: [
                    {
                        path: "",
                        name: "invoice.index",
                        component: () => import("./components/Invoice/Index.vue"),
                        meta: {
                            title: "Đơn hàng",
                        }, 
                    }, 
                    {
                        path: "create",
                        name: "invoice.create",
                        component: () => import("./components/Invoice/Create.vue"),
                        meta: {
                            title: "Tạo hóa đơn",
                        }, 
                    },
                    {
                        path: ":id",
                        name: "invoice.show",
                        component: () => import("./components/Invoice/Show.vue"),
                        meta: {
                            title: "Chi tiết hóa đơn",
                        },
                    },
                    {
                        path: ":id/edit",
                        name: "invoice.edit",
                        component: () => import("./components/Invoice/Edit.vue"),
                        meta: {
                            title: "Chỉnh sửa đơn hàng"
                        }
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
                        meta: {
                            title: "Thanh toán",
                        }
                    }, {
                        path: "create",
                        name: "payment.create",
                        component: () => import("./components/Payment/Create.vue"),
                        meta: {
                            title: "Thêm thanh toán mới",
                        }
                    }, {
                        path: ":id",
                        name: "payment.show",
                        component: () => import("./components/Payment/Show.vue"),
                        meta: {
                            title: "Chi tiết thanh toán",
                        }
                    }, {
                        path: ":id/edit",
                        name: "payment.edit",
                        component: () => import("./components/Payment/Edit.vue"),
                        meta: {
                            title: "Sửa thanh toán",
                        }                        
                    }

                ]
            }, {
                path: "option",
                name: "option.index",
                component: () => import("./components/Option/Index.vue"),
                meta: {
                    title: "Tùy chỉnh",
                }
            },

        ],
    },

    
];
export default routes;