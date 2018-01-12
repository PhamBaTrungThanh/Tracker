<template>
    <div class="wrapper">
        <div class="row no-gutters">
            <div id="sidebar">
                <div class="expand text-white">
                    <i class="material-icons">menu</i>
                </div>
                <div class="userinfo">
                    <div class="user-avatar">
                    </div>
                    <h6 class="text-center text-light">{{ user.name }}</h6>
                    <p class="small text-center text-muted">{{ user.label }}</p>
                </div>
                <div role="sections">
                    <ul>
                        <router-link tag="li" to="/dashboard">
                            <a><i class="material-icons">announcement</i><span>Thông báo</span></a>
                        </router-link>
                        <router-link tag="li" to="/hr">
                            <a><i class="material-icons">contacts</i><span>Nhân sự</span></a>
                        </router-link>
                        <router-link tag="li" to="/work">
                            <a><i class="material-icons">location_city</i><span>Dự án</span></a>
                        </router-link>
                        <router-link tag="li" to="/invoice">
                            <a><i class="material-icons">receipt</i><span>Đơn hàng</span></a>
                        </router-link>
                        <router-link tag="li" to="/payment">
                            <a><i class="material-icons">account_balance_wallet</i><span>Thanh toán</span></a>
                        </router-link>
                        <router-link tag="li" to="/option">
                            <a><i class="material-icons">settings</i><span>Tùy chỉnh</span></a>
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
        <vue-topprogress ref="topProgress"></vue-topprogress>
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
        next(vm => {
            // Interceptors for axios
            vm.axios.interceptors.request.use( config => {
                vm.$refs.topProgress.start();
                return config;
            }, error => {
                vm.$refs.topProgress.fail();
                return Promise.reject(error);
            });
            vm.axios.interceptors.response.use( response => {
                vm.$refs.topProgress.done();
                return response;
            }, error => {
                vm.$refs.topProgress.fail();
                return Promise.reject(error);
            })
            vm.$store.dispatch('httpGetUser');
        });        
    },
}
</script>

