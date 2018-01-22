<template>
    <div class="wrap">
        <hero-header :page="pageMeta" />
        <section class="section">
            <div class="container">
                <transition name="slide-fade">
                    <div class="work_index--wrapper" v-if="works.length" >
                        <div class="tile is-ancestor">
                            <div v-for="work in works" :key="work.id" class="tile is-3">
                                <router-link class="card is-hoverable" tag="article" :to="{ 'name': 'work.show', 'params': {'id': work.id} }">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img :src="work.image_cover" alt="">
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-left">
                                                <figure class="image image is-1by1 is-32x32">
                                                    <img :src="work.image_cover" alt="">
                                                </figure>
                                            </div>
                                            <div class="media-content">
                                                <p class="title is-6">{{work.name}}</p>
                                                <p class="subtitle is-6">Cập nhật mới: <i>{{work.updated_at}}</i></p>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </section>
    </div>


</template>

<script>

import {mapState} from 'vuex';

export default {
    data() {
        return {
            'report': false,
            'action': false,
            'pageMeta': {
                'title': "Danh sách công trình",
                'description': "Tất cả các công trình của MEC hiện tại",
            },
            'ready': false,
        }
    },
    computed: {
        ...mapState([
            'works'
        ])
    },


    methods: {
        fetchData() {
            this.current_work_id = false;
            this.axios.get(`${this.$store.state.apiBase}/work`).then( response => {
                this.works = response.data;
            }).catch( error => {
                console.log(error);
            });
        },
        viewReports(work_id) {
            this.current_work_id = work_id;
            this.$refs.fullscreen.enter();

        },
        workDetail(work_id) {
            this.$router.push({
                "name": "work.show",
                "params": {"id": work_id}
            });
        },
        newWork() {}
    },
    mounted() {
        if (!this.works.length) {
            this.$store.dispatch("httpGetWorks");
        }
    },
}
</script>

<style>

</style>

