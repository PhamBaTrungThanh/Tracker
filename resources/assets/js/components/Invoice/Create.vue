<template>
    <transition v-if="is_ready">
        <div class="create_invoice--container">
            <div class="card">
                <br>
                <h3 class="card-title text-center">Tạo đơn hàng mới</h3>
                <hr>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <h5 class="text-center">Thông tin chung</h5>
                            <div class="form-group">
                                <label for="invoice_name">Tên đơn hàng</label>
                                <input type="text" class="form-control" id="invoice_name" v-model="invoice_name">
                            </div>
                            <div class="form-group">
                                <treeselect :options="invoice_type_options" v-model="invoice_type"></treeselect>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col">
                                        <label for="signed_at">Ngày ký</label>
                                        <input type="date" class="form-control" id="signed_at" v-model="signed_at">
                                    </div>
                                    <div class="col">
                                        <label for="contract_number">Số hợp đồng</label>
                                        <input type="text" class="form-control" id="contract_number" v-model="contract_number">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col">
                            <h5 class="text-center">Nhà cung cấp</h5>
                            <div class="form-group">
                                <label for="">Chọn nhà cung cấp</label>
                                <treeselect :load-root-options="fetchProviders"  v-model="provider_id" placeholder="Chọn nhà cung cấp"></treeselect>
                            </div>
                            
                            <div v-if="provider_id === 0">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col">
                                            <input type="text" class="form-control" v-model="new_provider.name" placeholder="Tên nhà cung cấp">
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" v-model="new_provider.tax_number" placeholder="Mã số thuế">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col">
                                            <input type="text" class="form-control" v-model="new_provider.description" placeholder="Mô tả">
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" v-model="new_provider.address" placeholder="Địa chỉ">
                                        </div>
                                    </div>            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr>
                <div class="card-body">
                    <h5>Danh sách vật tư</h5>
                    <div class="form-group">
                            <treeselect :multiple="true" :options="nested_categories" :open-on-focus="true" :close-on-select="false" :disableBranchNodes="false" placeholder="Chọn vật tư theo danh sách" @close="chooseMaterials"></treeselect>
                    </div>
                    <div class="form-group">
                        <table class="table boq-table">
                            <thead class="thead-light text-center">
                                <tr>
                                    <th rowspan="2" class="controls-col text-center"></th>
                                    <th rowspan="2" class="text-left name-col" >Tên vật tư / Danh mục</th>
                                    <th rowspan="2" class="per-col">Đơn vị tính</th>
                                    <th rowspan="2" class="currency-col">Loại tiền</th>
                                    <th rowspan="2" class="brand-col">Hãng</th>
                                    <th colspan="3" class="invoice-col"><span v-if="invoice_type === 'invoice'">Đơn hàng</span><span v-else>Hợp đồng</span></th>
                                    <th colspan="2" class="boq-col">BOQ</th>
                                    <th rowspan="2" class="notes-col">Ghi chú</th>
                                </tr>
                                <tr>
                                    <th class="text-center boq-unit-col">Số lượng</th>
                                    <th class="text-center boq-price-col">Đơn giá</th>
                                    <th class="text-center boq-total-col">Thành tiền</th>
                                    <th class="text-center boq-unit-col">Số lượng</th>
                                    <th class="text-center boq-price-col">Đơn giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(row, index) in rows">
                                    <template v-if="row.type === 'category'">
                                        <tr :key="row.uid" class="category-row">
                                            <td class="controls-col" @click.self="addMaterial(row.id)">+</td>
                                            <td colspan="10"><input type="text" class="inline-td" v-model="row.name" @focus="$event.target.select()" @keyup.enter="addMaterial(row.keyid)"></td>
                                        </tr>
                                    </template>                                    
                                    <template v-else>
                                        <tr :key="row.uid" class="material-row">
                                            <td class="controls-col">-</td>
                                            <td><input type="text" class="inline-td" :disabled="!row.is_new" v-model="row.name" @focus="$event.target.select()" @keyup.enter="addMaterial(row.keyid)"></td>
                                            <td><input type="text" class="inline-td" :disabled="!row.is_new" v-model="row.per" @focus="$event.target.select()"></td>
                                            <td><input type="text" class="inline-td" :disabled="!row.is_new" v-model="row.currency" @focus="$event.target.select()"></td>
                                            <td><input type="text" class="inline-td" :disabled="!row.is_new" v-model="row.brand" @focus="$event.target.select()"></td>
                                            <td><input type="text" class="inline-td" v-model="row.unit" @focus="$event.target.select()"></td>
                                            <td><input type="text" class="inline-td" v-model="row.price" @focus="$event.target.select()"></td>
                                            <td>{{ row.price * row.unit }}</td>
                                            <td><input type="text" class="inline-td" :disabled="!row.is_new" v-model="row.boq_unit" @focus="$event.target.select()"></td>
                                            <td><input type="text" class="inline-td" :disabled="!row.is_new" v-model="row.boq_price" @focus="$event.target.select()"></td>                               
                                            <td></td>
                                        </tr>
                                    </template>
                                    <template v-if="whatsAhead(index)">
                                        <tr :key="index + Math.random()" class="new-material">
                                            <td class="controls-col">∗</td>
                                            <td colspan="10"><input type="text" placeholder="Thêm vật tư" class="inline-td" @focus="$event.target.select()" @keyup.enter="newMaterial(index, $event)"></td>
                                        </tr>
                                    </template>
                                </template>
                                <tr class="add-more" @click="addCategory">
                                    <td class="controls-col">+</td>
                                    <td colspan="10">Thêm danh mục</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div class="form-group text-center" >
                    <button class="btn btn-primary" @click="submit">Lưu</button>
                    <button class="btn" @click="cancel">Bỏ qua</button>
                </div>
            </div>
        </div>           
    </transition>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
export default {
    data() {
        return {
            is_ready: false,
            new_list: [],
            rows: [],
            categorized_list: [],
            materials_in_existing_category: [],
            new_materials_list: [],
            invoice_type_options: [
                {
                    id: "invoice",
                    label: "Hoá đơn mua hàng",
                }, {
                    id: "contract",
                    label: "Hợp đồng nguyên tắc"
                }
            ],
            invoice_type: "invoice",
            invoice_name: "",
            provider_id: null,
            providers: [],
            signed_at: "",
            contract_number: "",
            new_provider: {
                name: "",
                tax_number: "",
                description: "",
                address: "",
            },
            work: false,
        }
    },

    computed: {
        nested_categories() {
            return this.work.categories.map( category => {
                return {
                    id: `${category.id}--cat`,
                    label: category.name,
                    children: this.work.flatten.reduce( (_children, material) => {
                        if (material.category_id == category.id) {
                            _children.push({
                                id: `${material.id}--mat`,
                                label: material.name,
                            });
                        }
                        return _children;
                    }, []),
                }
            });
        },
        nested_list() {
            let _nestedList = [];
            this.rows.forEach( node => {
                if (node.type === "category") {
                    _nestedList.push({
                        name: node.name,
                        id: node.id,
                        children: [],
                    });
                }
                if (node.type === "material") {
                    if (node.name) {
                        _nestedList[_nestedList.length - 1].children.push(node);
                    }
                    
                }
            });
            return _nestedList;
        },
    },
    watch: {
        categorized_list() {
            this.updateRows();
        }, 
        new_list() {
            this.updateRows();
        }
    },
    methods: {
        chooseMaterials(values) {
            let _list = [];
            let addedCategories = [];
            const get = (str) => { 
                const t = str.split("--");
                return {
                    id: parseInt(t[0]),
                    type: t[1],
                }
            };

            values.forEach( value => {
                const t = get(value);
                if (t.type === "cat") {
                    _list.push(this.categoryResource(t.id));
                    
                   addedCategories.push(t.id);
                    _list.push(...this.work.flatten.reduce( (materials, material) => {
                        if (material.category_id === t.id) {
                            materials.push(this.materialResource(material));
                        }
                        return materials;
                    }, []));
                }
                if (t.type === "mat") {
                    // Get material
                    const _material = this.work.flatten.find( material => material.id === t.id );
                    // First we check if the category of this material is already added
                    // If not found, add it first
                    if (addedCategories.indexOf( _material.category_id ) === -1) {
                        _list.push(this.categoryResource(_material.category_id));
                        addedCategories.push(_material.category_id);
                    }
                    _list.push(this.materialResource(_material));
                }
            });
            this.categorized_list = _list;

        },
        whatsAhead(index) {
            if (typeof this.rows[index + 1] !== "object") {
                return true;
            } else if (this.rows[index + 1].type === "category") {
                return true;
            }
            return false;
        },
        updateRows() {
            this.rows = this.categorized_list.concat(...this.new_list);
        },
        addCategory() {
            this.new_list.push(this.categoryResource());
        },
        
        categoryResource(id = 0) {
            let _category = false;
            if (typeof id === "number" && id !== 0) {
                _category = this.work.flatten.find( category => category.id === id );
            } else if (typeof id === "object") {
                _category = id;
            }
            return {
                "type": "category",
                "name": (_category) ? _category.name : "",
                "uid": this.uid(),
                "is_new": (_category) ? false : true,      
                "id": (_category) ? _category.id : 0,              
            }
        },
        materialResource(material = false, override = {}) {
            const _material = {
                "name": (material) ? material.name : "",
                "type": "material",
                "currency": (material) ? material.currency : "vnđ",
                "per": (material) ? material.per : "m",
                "uid": this.uid(),
                "boq_unit": (material) ? material.boq_unit : "-",
                "boq_price": (material) ? material.boq_price : "-",
                "brand": (material) ? material.brand : "",
                "is_new": (material) ? false : true,
                "unit":  0,
                "price": 0,   
                "id": (material) ? material.id : 0,
                "category_id": (material) ? material.category_id : 0,
            }
            return Object.assign({}, _material, {});
        },
        addMaterial(category_id) {
            let found = false;
            let inserted = false;
            console.log("begin looking");
            for (let i = 0; i < this.categorized_list.length; i++) {
                if (this.categorized_list[i].type === "category") {
                    if (this.categorized_list[i].id === category_id) {
                        found = true;
                        console.log("found at", i);
                        continue;
                    }
                }
                if (found) {
                    console.log(this.categorized_list[i].type);
                    if (this.categorized_list[i].type === "category") {
                        // Stop and insert
                        console.log("insert at", i);
                        inserted = true;
                        this.categorized_list.splice(i, 0, this.materialResource(false, {"category_id":  category_id}));
                        break;
                    } else {
                        continue;
                    }
                }
                
            }
            if (found && !inserted) {
                console.log("eof reached");
                this.categorized_list.splice(this.categorized_list.length, 0, this.materialResource(false, {"category_id":  category_id}));
            }

        },
        newMaterial(index) {

        },

        uid() {
            return Math.random().toString(36).substring(2) 
               + (new Date()).getTime().toString(36).substring(10);
        },
        fetchProviders(callback) {
            callback(null, [{id: 0, label: "Tạo nhà cung cấp mới"}].concat(this.providers.map( provider => { return {id: provider.id, label: provider.name} })));
        },
        ready() {
            
            this.invoice_name = `Hóa đơn ${this.work.invoices.length}`;
            this.is_ready = true;
        },
        cancel() {
            this.$router.push({
                name: "work.show",
                params: {
                    id: this.work.id
                }
            });
        },
        submit() {
            axios.patch(`${this.$store.state.apiBase}/work/${this.work.id}`, {
                action: `new_${this.invoice_type}`,
                provider_id: this.provider_id,
                new_provider: this.new_provider,
                list: this.nested_list,
                signed_at: this.signed_at,
                contract_number: this.contract_number,
            }).then( response => {
                if (response.status === 200) {
                    this.$swal("Hoàn tất", "Cập nhật thành công", "success").then( result => {
                        this.$close(true);
                    });
                }
            });
        }
    },
    created() {
        axios.get(`${this.$store.state.apiBase}/provider`).then (response => {
            this.providers = response.data;
        });
        if (this.$route.query.work_id) {
            if (parseInt(this.$route.query.work_id) === this.$store.state.currentWork.id) {
                console.log('get from $store');
                this.work = this.$store.state.currentWork;
                this.ready();

            } else {
                console.log('REST get');
                axios.get(`${this.$store.state.apiBase}/work/${this.$route.query.work_id}`).then (response => {

                    this.work = response.data.data;
                    this.ready();
                }); 
            }
        }
    },
    directives: {
        focus: {
            // directive definition
            inserted: function (el) {
                el.focus();
            }
        }
    },
    components: {
        Treeselect,
    }
}
</script>

<style>

</style>
