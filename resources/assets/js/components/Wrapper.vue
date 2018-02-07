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
        
        <div class="page----content">
            <router-view></router-view>
        </div>
        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    <p>

                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data: () => ({
        eatTheBurger: false,
        page: {
            'title': "MEC",
            'description': "",
            'isBigHero': false,
        }
    }),
    computed: {
        user() {
            return this.$store.getters["user/user"];
        }
    },
    methods: {
        guard() {
            this.$store.dispatch('user/getUser');
            this.$store.dispatch('provider/getProviders');
            this.$store.dispatch("work/getWorks");
        }
    },

    
} 
</script>

