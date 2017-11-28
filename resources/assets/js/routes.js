const Login = () => import('./components/Login.vue');
const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            title: "Đăng nhập",
        },
    },
    
];
export default routes;