<template>
    <div class="page----wrapper">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <router-link class="navbar-item" to="/dashboard">
                        <img src="./../../images/logo.png">
                    </router-link>

                    <a :class="['burger', 'navbar-burger', {'is-active': eatTheBurger}]" @click="eatTheBurger = !eatTheBurger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div :class="['navbar-menu', {'is-active': eatTheBurger}]">
                    <div class="navbar-start">
                        <router-link class="navbar-item router-link" to="/dashboard">
                            <span>Thông báo</span>
                        </router-link>
                        <router-link class="navbar-item router-link" to="/hr">
                            <span>Nhân sự</span>
                        </router-link>
                        <router-link class="navbar-item router-link" to="/work">
                            <span>Dự án</span>
                        </router-link>
                        <router-link class="navbar-item router-link" to="/invoice">
                            <span>Đơn hàng</span>
                        </router-link>
                        <router-link class="navbar-item router-link" to="/payment">
                            <span>Thanh toán</span>
                        </router-link>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item" v-if="user.name">
                            <span>Xin chào </span><h6 class="text-center text-light"> {{ user.name }}</h6>
                        </div>
                        <div class="navbar-item">
                            <div class="field is-grouped">
                                <p class="control">
                                    <router-link class="button is-primary" to="/option">
                                        <span class="icon">
                                            <i class="mdi mdi-settings"></i>
                                        </span>
                                        <span>Tùy chọn</span>
                                    </router-link>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
        <section :class="['hero', 'is-primary', {'is-medium': page.isBigHero}]">
            <div class="hero-body is-relative">
                <div class="is-overlay background-cover">
                    <img :src="page.background" v-if="page.background">
                </div>
                <div class="container">
                    <h1 class="title">{{page.title}}</h1>
                    <h2 class="subtitle">{{page.description}}</h2>
                </div>
            </div>
        </section>
        <section role="main">
            <main class="container">
                <router-view></router-view>
            </main>
        </section>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data: () => ({
        eatTheBurger: false,
    }),
    computed: {
        ...mapState([
            'user',
            'page',
        ]),
    },
    methods: {
        guard() {
            console.log('call guard');
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => vm.$store.dispatch('httpGetUser'));
    },
}
</script>

