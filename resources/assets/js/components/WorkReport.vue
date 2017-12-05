<template>
    <div class="card" v-if="report">
        <h4 class="card-header">Công trình {{ report.name}} </h4>
        <div class="card-body">
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            report: false,
        }
    },
    created() {
        this.axios.get(`${this.$store.state.apiBase}/work/${this.$route.params.id}`).then( response => {
            this.report = response.data.data;
        }).catch( error => {
            console.log(error);
        });
    }
}
</script>

<style>

</style>
