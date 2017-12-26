<template>
    <div class="invoice---wrapper">
        <router-link :to="{name: 'invoice.index'}" class="back-to-index" v-if="$route.name !== 'invoice.index'">Về danh mục</router-link>
        <router-view></router-view>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
