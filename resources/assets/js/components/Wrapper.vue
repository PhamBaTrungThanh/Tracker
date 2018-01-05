<template>
    <div class="wrapper">
        <div class="row no-gutters">
            <div id="sidebar">
                <div class="userinfo">
                    <div class="user-avatar">
                    </div>
                    <h6 class="text-center text-light">{{ user.name }}</h6>
                    <p class="small text-center text-muted">{{ user.label }}</p>
                </div>
                <div role="sections">
                    <ul>

                        <router-link tag="li" to="/dashboard">
                            <a>Thông báo</a>
                        </router-link>
                        <router-link tag="li" to="/hr">
                            <a>Nhân sự</a>
                        </router-link>
                        <router-link tag="li" to="/work">
                            <a>Dự án</a>
                        </router-link>
                        <router-link tag="li" to="/invoice">
                            <a>Đơn hàng</a>
                        </router-link>
                        <router-link tag="li" to="/payment">
                            <a>Thanh toán</a>
                        </router-link>
                        <router-link tag="li" to="/option">
                            <a>Tùy chỉnh</a>
                        </router-link>
                    </ul>
                </div>
            </div>

            <div id="main-content" class="col">
                <div id="navigation" class="container-fluid">
                    <div class="row align-items-center" style="height: 100%">
                        <div class="col">
                            <span class="h4">{{ pageTitle }}</span>
                        </div>
                    </div>  
                </div>
                <main class="container-fluid">
                    <router-view></router-view>
                </main>
            </div>
        </div>
        <dialogs-wrapper></dialogs-wrapper>        
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { getCookie } from 'tiny-cookie';


export default {
    computed: {
        pageTitle() {
            return this.$route.meta.title;
        },
        ...mapState([
            'user',
        ]),
    },
    beforeRouteEnter(to, from, next) {
        
        console.log("Getting token from cookie");
        const cookieToken = getCookie('cookie-token');
        if (!cookieToken) {
            console.error("Cookies's empty, proceed to login");
            next({name: "login"});
        } else {
            console.info("Token found from cookies");

            // do a call to ./user
            axios.get(`${window.location.origin}/api/v1/user`, {
                    headers: {
                        'Authorization': cookieToken
                    }
                }).then(response => {
                    console.info("Token is legit");
                    axios.defaults.headers.common['Authorization'] = cookieToken;
                    axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
                    next(vm => {
                        vm.$store.commit('SET_USER', response.data.data);
                        vm.$store.commit('SET_AUTHORIZATION_TOKEN', cookieToken);
                    })

                })
                .catch(error => {
                    if (error.response.status == 401) {
                        console.error("Token ilegal, proceed to login");
                        next({name: "login"});
                    } else {
                        console.log(error);
                    }
            });
        }


        
    },
}
</script>

