<template>
    <div class="wrapper tracker-table material-trackers">
        <table class=" heading-table">
            <thead class="thead-light">
                <tr>
                    <th class="col1">#</th>
                    <th class="col2">Tên</th>
                    <th class="col3">Đơn vị</th>
                    <th class="col4">Loại tiền</th>
                    <th class="col5">Giá hiện tại</th>
                    <th class="col6">Hãng</th>
                </tr>
            </thead>            
        </table>
        <material-row v-for="(row, index) in rows" :row="row" :key="index"></material-row>

        <div class="controls text-center">
            <button class="btn primary" @click="addCategory">Thêm danh mục</button>
            <button class="btn primary">Thêm vật tư</button>
        </div>

        <div class="add-category show-on-swal" ref="addCategoryElement">
            <h3 class="text-center">Thêm danh mục</h3>
            <div class="form-group">
                <input type="text" class="form-control" v-bind="newCategoryTitle" placeholder="Nhập tên danh mục">
            </div>
            <div class="form-group">
                <label>Nhập danh mục cha</label>
                  <treeselect
                    :multiple="false"
                    :load-root-options="ajaxLoadCategories"
                    :searchable="true"
                    :close-on-select="true"
                    placeholder="Bỏ trống để làm danh mục gốc"
                    v-model="selectedCategories"

                />
            </div>
        </div>
    </div>

            
</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
import MaterialRow from './Rows/MaterialRow';

export default {
    data() {
        return {
            rows: false,
            categories: [],
            newCategoryTitle: null,
            selectedCategories: null,
        }
    },
    methods: {
        addCategory() {
            this.$swal({
                content: this.$refs.addCategoryElement,
            });
        },
        ajaxLoadCategories(callback) {
            callback(null, this.categories);
        },
        convertToArray(objects) {
            let list = [];
            for(let index in objects) {
                list.push(objects[index]);
            }
            return list;
        }
    },
    computed: {
        masterCategories() {

        }
    },
    created() {
        axios.get(`${this.$store.state.apiBase}/material/categories`).then( response => {
            

                this.$store.commit('UPDATE_CATEGORY_LIST', response.data.data);
                this.categories = this.convertToArray(response.data.data);
                return response.data.data;
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
