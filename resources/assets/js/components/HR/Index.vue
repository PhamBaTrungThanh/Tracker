<template>
    <transition name="slide-fade">
        <div class="index--wrapper" v-if="ready">
            <hero-header :page="pageMeta" >
                <div class="hero-foot" slot="footer"> 
                    <nav class="tabs  is-boxed">
                        <div class="container">
                            <ul>
                                <li class="is-active"><a>Nhân sự</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>     
            </hero-header>    
            <section class="section">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <div class="content">
                                <div class="box">
                                    <figure class="image is-1by1">
                                        <span class="icon is-large">
                                            <i class="mdi mdi-account-circle mdi-48px"></i>
                                        </span>
                                    </figure>
                                    <p class="has-text-centered title is-3">Cá nhân</p>
                                </div>
                            </div>
                        </div>
                        <div class="column"></div>
                        <div class="column"></div>
                        <div class="column"></div>
                    </div>
                </div>
            </section>
        </div>

    </transition>
</template>

<script>
export default {
    data: () => {
        return {
            ready: false,
        }
    },
    computed: {
        user() {
            return this.$store.getters["user/user"];
        },
        pageMeta() {
            return {
                'title': "Quản lý nhân sự",
                'description': "Công ty MEC",
                'color': "dark",
            }
        }
    },
    mounted() {
        this.ready = true;
    }
}
</script>

<style>

</style>