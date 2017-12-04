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
            }
        ],
    },

    
];
export default routes;