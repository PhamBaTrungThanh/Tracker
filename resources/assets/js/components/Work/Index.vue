<template>
    <div id="works">
        <div class="card-deck works" v-if="works">
            <template v-for="work in works" class="work">
                <div class="card" @click="workDetail(work.id)" :key="work.id" >
                    <img class="card-img-top" :src="work.image_cover" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"><b>Công trình:</b> {{ work.name }}</h5>
                        <p class="card-text">Chủ đầu tư: <small class="text-muted">{{ work.client }}</small></p>
                        <p class="card-text"><b>Mô tả: </b>{{ work.description }}</p>
                        
                    </div>
                </div>   

            </template>
            <div class="card work" @click="newWork">
                <div class="card-body">
                    <h4 class="card-title text-center">Thêm công trường</h4>
                    <p class="card-text text-center">
                        Tạo công trường mới
                        
                    </p>
                </div>
            </div>                
        </div>
    </div>
</template>

<script>



export default {
    data() {
        return {
            works: [],
            report: false,
            fullscreen: false,
            action: false,
        }
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
        this.fetchData();
    },
}
</script>

<style>

</style>

