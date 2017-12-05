<template>
    <div id="works">
        <div class="card-deck works" v-if="works">
            <router-link class="card" v-for="work in works" :key="work.id" :to="{name: 'base.workReport', params: {id: work.id}}">
                <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
                <div class="card-body">
                    <h4 class="card-title">{{ work.name }}</h4>
                    <p class="card-text">{{ work.description }}</p>
                    <p class="card-text"><small class="text-muted">{{ work.client }}</small></p>
                </div>
            </router-link>                
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            works: [],
        }
    },
    mounted() {
        this.axios.get(`${this.$store.state.apiBase}/works`).then( response => {
            this.works = response.data.data;
        }).catch( error => {
            console.log(error);
        });
    }
}
</script>

<style>

</style>

