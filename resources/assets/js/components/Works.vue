<template>
    <div id="works">
        <div class="card-deck works" v-if="works">
            <div class="card work" v-for="work in works" :key="work.id">
                <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
                <div class="card-body">
                    <h4 class="card-title">{{ work.name }}</h4>
                    <p class="card-text">{{ work.description }}</p>
                    <p class="card-text"><small class="text-muted">{{ work.client }}</small></p>
                    <button class="float-right btn btn-primary" @click="viewReports(work.id)">Xem báo cáo</button>
                </div>
            </div>                
        </div>
        <fullscreen :fullscreen.sync="fullscreen" ref="fullscreen" background="#ffffff">
            <hot-table :settings="tableSetting" v-if="fullscreen"></hot-table>
        </fullscreen>
    </div>
</template>

<script>
import Fullscreen from "vue-fullscreen/src/component.vue"
import HotTable from 'vue-handsontable-official';

export default {
    data() {
        return {
            works: [],
            report: false,
            tableSetting: {
                stretchH: "all",
            },
            fullscreen: false,
        }
    },
    methods: {
        viewReports(work_id) {
            this.$refs.fullscreen.enter();
            this.axios.get(`${this.$store.state.apiBase}/work/${work_id}`).then( response => {
                this.report = response.data.data;
            }).catch( error => {
                console.log(error);
            });
        }
    },
    mounted() {
        this.axios.get(`${this.$store.state.apiBase}/works`).then( response => {
            this.works = response.data.data;
        }).catch( error => {
            console.log(error);
        });
    },
    components: {
        HotTable,
        Fullscreen,
    }
}
</script>

<style>

</style>

