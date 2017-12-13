<template>
    <div class="wrapper">
        <div class="row no-gutters">
            <div id="sidebar">
                    <div class="userinfo">
                        <div class="user-avatar">
                        </div>
                        <h5 class="text-center text-light">{{ user.username }}</h5>
                    </div>
                    <div role="sections">
                        <ul>

                            <router-link tag="li" to="/dashboard">
                                <a>Thông báo</a>
                            </router-link>
                            <router-link tag="li" to="/works">
                                <a>Công trường</a>
                            </router-link>
                            <router-link tag="li" to="/materials">
                                <a>Vật tư/Báo giá</a>
                            </router-link>
                        </ul>
                    </div>
                </div>

                <div id="main-content" class="col">
                    <div id="navigation" class="container">
                        <div class="row align-items-center" style="height: 100%">
                            <div class="col">
                                <span class="h4">{{ pageTitle }}</span>
                            </div>
                        </div>  
                    </div>
                    <main class="container">
                        <router-view></router-view>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

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
        console.log('next');
    },
}
</script>

