<template>
    <div class="wrapper tracker-table material-trackers">
        <table class=" heading-table">
            <thead class="thead-light">
                <tr>
                    <th class="col1">#</th>
                    <th class="col2">Tên</th>
                    <th class="col3">Đơn vị</th>
                    <th class="col4">Giá hiện tại</th>
                    <th class="col5">Hãng</th>
                </tr>
            </thead>            
        </table>
        <material-row v-for="(row, index) in rows" :row="row" :key="index"></material-row>
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
    methods: {

    },
    computed: {

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
