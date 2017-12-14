<template>
    <table class="material-table trackers">
        <thead class="thead-light">
            <tr>
                <th style="width: 40px;" class="text-center">#</th>
                <th>Tên</th>
                <th class="text-center" style="width: 80px;">Đơn vị</th>
                <th class="text-center" style="width: 150px">Giá hiện tại</th>
                <th class="text-center" style="width: 150px;">Hãng</th>
            </tr>
        </thead>
        <tbody>
            <material-row v-for="(row, index) in rows" :row="row" :key="index"></material-row>
        </tbody>
    </table>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
import MaterialRow from './Rows/MaterialRow';

export default {
    data() {
        return {
            rows: false,
        }
    },
    created() {
        axios.get(`${this.$store.state.apiBase}/material/categories`).then( response => {
                this.$store.commit('UPDATE_CATEGORY_LIST', response.data.data);
            }).catch( error => {
                console.log(error);
            });
        axios.get(`${this.$store.state.apiBase}/material`).then( response => {
                this.rows = response.data.data;
            }).catch( error => {
                console.log(error);
            });
    },
    components: {
        MaterialRow,
    }
}
</script>

<style>

</style>
