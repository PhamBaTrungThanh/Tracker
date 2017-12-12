<template>
  
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
export default {
    mounted() {
        this.axios.get(`${this.$store.state.apiBase}/material/categories`).then( response => {
                console.log(response);
            }).catch( error => {
                console.log(error);
            });
    }
}
</script>

<style>

</style>
