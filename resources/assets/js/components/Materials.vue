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
        <material-row v-for="(row, index) in rows" :row="row" :key="index" @new-category="newCategory"></material-row>

        <div class="controls text-center">
            <button class="btn primary" @click="newCategory">Thêm danh mục gốc</button>
        </div>
        <div class="add-category show-on-swal" ref="addCategoryElement">
            <h3 class="text-center">Thêm vào <b>{{addCategoryTitle}}</b></h3>
            <template v-for="i in looper">
                <div class="form-group" :key="i">
                    <input type="text" class="form-control new-category-name" placeholder="Nhập tên danh mục" >
                </div>
            </template>
            <a href="#" @click="looper++">Thêm</a>
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
            addCategoryTitle: "",
            looper: 1,
        }
    },
    methods: {

        ajaxLoadCategories(callback) {
            callback(null, this.categories);
        },
        clearCategory() {
            this.looper = 1;
            this.addCategoryTitle = "";
            document.querySelector('input.new-category-name').value ="";
            
        },
        getData() {
            axios.get(`${this.$store.state.apiBase}/material`).then( response => {
                this.rows = response.data.data;
            }).catch( error => {
                console.log(error);
            });
        },
        newCategory(parent) {
            if (!parent) {
                parent.name = "gốc";
                parent.id = 0;
            }
            this.addCategoryTitle = parent.name;
            this.$swal({
                content: this.$refs.addCategoryElement
            }).then( result => {
                
                if (result) {
                    let newCategories = [];
                    document.querySelectorAll('input.new-category-name').forEach( node => {
                        newCategories.push(node.value);
                    });
                    axios.post(`${this.$store.state.apiBase}/category`, {
                        categories: newCategories,
                        parent_id: parent.id,
                    }, {
                        headers: {
                            ContentType: 'application/x-www-form-urlencoded',
                        }
                    }).then( response => {
                        if (response.status === 200) {
                            this.getData();
                        }
                    });
                    
                }
                this.clearCategory();
            });
        }
    },
    computed: {
        masterCategories() {

        }
    },
    created() {
        this.getData();
    },
    components: {
        MaterialRow,
    }
}
</script>

<style>

</style>
