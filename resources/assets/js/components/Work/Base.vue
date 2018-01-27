<template>
    <div class="work---wrapper">
        
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("work/getWorks");
    }
}
</script>

<style>

</style>
