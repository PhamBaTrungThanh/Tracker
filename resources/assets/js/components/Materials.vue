<template>
    <div class="wrapper">
        <table class=" trackers-table material-trackers">
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
            <tbody>
                <material-row v-for="(row, index) in flattenRows" :row="row" :key="index" @new-category="newCategory" @new-materials="newMaterials" @expand="toggleExpand"></material-row>
            </tbody>        
        </table>
        

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
        <div class="add-materials show-on-swal" ref="addMaterialElement">
            <h3 class="text-center">Thêm vật tư vào <b>{{addCategoryTitle}}</b></h3>
            <div class="nav nav-pills">
                <a href="#" :class='{ "nav-link": true, "active": activeTab === "manual_import"}' @click="activeTab = 'manual_import'">Nhập bằng tay</a>
                <a href="#" :class='{ "nav-link": true, "active": activeTab === "from_excel"}' @click="activeTab = 'from_excel'">Copy từ Excel</a>
            </div>
            <div class="content">
                <div class="manual_import" v-if='activeTab === "manual_import"'>        
                    <template v-for="i in looper">
                        <div class="form-row new-material" :key="i" >
                            <div class="col-7">
                                <input type="text" class="form-control new-material-name" placeholder="Tên vật tư" >
                            </div>
                            <div class="col">
                                <input type="text" class="form-control new-material-unit" placeholder="Đơn vị" >
                            </div>
                            <div class="col">
                                <input type="text" class="form-control new-material-currency" placeholder="Loại tiền" >
                            </div>    
                            <div class="col">
                                <input type="text" class="form-control new-material-price" placeholder="Giá tiền" >
                            </div>   
                            <div class="col">
                                <input type="text" class="form-control new-material-brand" placeholder="Hãng" >
                            </div>                           
                        </div>    
                    </template>
                    <br>
                    <a href="#" @click="looper++">Thêm</a>
                </div>
                <div v-else>
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th class="col2">Tên</th>
                                <th class="col3">Đơn vị</th>
                                <th class="col4">Loại tiền</th>
                                <th class="col5">Giá hiện tại</th>
                                <th class="col6">Hãng</th>
                            </tr>
                        </thead>         
                    </table>                    
                    <textarea v-model="copyFromExcel" placeholder="Copy từ Excel" cols="100" rows="10" class="form-control"></textarea>
                </div>
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
            addCategoryTitle: "",
            looper: 1,
            activeTab: "manual_import",
            copyFromExcel: "",
        }
    },
    methods: {
        getData() {
            axios.get(`${this.$store.state.apiBase}/material`).then( response => {
                this.rows = response.data.data;
                //this.flatten(this.rows);
            }).catch( error => {
                console.log(error);
            });
        },

        toggleExpand(data) {
            console.log(data);
            for (let index in this.flattened_rows) {
                if (this.flattened_rows[index].id === data.id && this.flattened_rows[index].type === 'category') {
                    this.flattened_rows[index].expanded = data.expanded;
                    if (data.expanded === true) {

                        this.flattened_rows.splice(index , 0, ...this.flattened_rows[index].children);
                    }
                    if (data.expanded === false) {
                        this.flattened_rows.splice(index, this.flattened_rows[index].children.length);
                    }
                    break;
                    
                }
            }

        },
        newMaterials(parent) {
            if (!parent) {
                return false;
            } else {
                this.addCategoryTitle = parent.name;
            }
            this.looper = 1;
            this.copyFromExcel = "";
            this.$swal({
                content: this.$refs.addMaterialElement,
                className: 'big-swal',
            }).then( result => {
                    let _data = [];
                    if (this.activeTab == "manual_import") {
                        document.querySelectorAll('div.form-row.new-material').forEach( node => {
                            const values = node.getElementsByTagName('input');
                            _data.push({
                                name: values[0].value,
                                per: values[1].value,
                                currency: values[2].value,
                                current_price: values[3].value,
                                brand: values[4].value,
                            });
                        });    
                    }
                    if (this.activeTab == "from_excel") {
                        console.log("Copy data from Excel");
                        if (this.copyFromExcel) {
                            let _rows = this.copyFromExcel.split(String.fromCharCode(13));
                            _rows.forEach( (_row, index) => {
                                _rows[index] = _row.split(String.fromCharCode(9));
                            });
                            console.log(_rows);
                        }
                        
                    }

   
                    axios.post(`${this.$store.state.apiBase}/material`, {
                        materials: _data,
                        category_id: parent.id,
                    }, {
                        headers: {
                            ContentType: 'application/x-www-form-urlencoded',
                        }
                    }).then( response => {
                        if (response.status === 200) {
                            this.getData();
                        }
                    });
                this.looper = 0;
                this.addCategoryTitle = "";    
            })
        },
        newCategory(parent) {
            if (!parent) {
                parent.name = "gốc";
                parent.id = 0;
            }
            this.looper = 1;
            this.addCategoryTitle = parent.name;
            this.$swal({
                content: this.$refs.addCategoryElement
            }).then( result => {
                
                if (result) {
                    let newCategories = [];
                    document.querySelectorAll('input.new-category-name').forEach( node => {
                        newCategories.push(node.value);
                    });
                    if (!newCategories) {
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

                    
                }
                this.looper = 0;
                this.addCategoryTitle = "";
            });
        }
    },
    computed: {
        flattenRows() {
            let _rows = [];
            if (this.rows) {
                for (let row of this.rows) {
                    _rows.push(row);
                    if (row.children && row.expanded === true) {
                        _rows.push(...row.children);
                    }

                }
            }

            return _rows;
        },
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
