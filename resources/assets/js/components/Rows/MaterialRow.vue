<template>
        <tr v-if="depth == 0">
            <th scope="row" colspan="4">{{row.name}}</th>
        </tr>
</template>

<script>

export default {
    props: {
        row: {
            type: Object,
            default: {},
        },
        depth: {
            type: Number,
            default: 0,
        }
    }
}
</script>

<style>

</style>
