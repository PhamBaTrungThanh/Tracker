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
        path: "/dashboard",
        name: "dashboard",
        component: () => import('./components/Dashboard.vue'),
        meta: {
            title: "Quản lý"
        }
    }
    
];
export default routes;