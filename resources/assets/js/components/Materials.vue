<template>
    <div class="material-table">
        <table class="table table-bordered table-hover table-sm">
            <thead class="thead-light">
                <tr>
                    <th scope="col" class="col-1">#</th>
                    <th scope="col" class="col-8">Tên</th>
                    <th scope="col" class="col-1">Đơn vị</th>
                    <th scope="col" class="col-2">Hãng</th>
                </tr>
            </thead>
            <tbody>
                <material-row v-for="(row, index) in rows" :row="row" :key="index"></material-row>
            </tbody>
        </table>
    </div>
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
    mounted() {
        this.axios.get(`${this.$store.state.apiBase}/material/categories`).then( response => {
                this.$store.commit('UPDATE_CATEGORY_LIST', response.data.data);
            }).catch( error => {
                console.log(error);
            });
        this.axios.get(`${this.$store.state.apiBase}/material`).then( response => {
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
