<template>
    
</template>

<script>



export default {
    data() {
        return {
            'works': [],
            'report': false,
            'action': false,
            'pageMeta': {
                'title': "Danh sách công trình",
                'description': "Tất cả các công trình của MEC hiện tại",
            },
            'ready': false,
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
        //this.$store.dispatch('setPageMeta', this.pageMeta);
        this.fetchData();
    },
}
</script>

<style>

</style>

