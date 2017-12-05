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
            }
        ],
    },

    
];
export default routes;