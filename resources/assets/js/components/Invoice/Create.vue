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
                                <input type="text" :class="{'form-control': true, 'is-invalid': errors.has('invoice_name')}" name="invoice_name" v-model="invoice_name" v-validate="'required'">
                                <span class="invalid-feedback">
                                    Tên đơn hàng không được để trống.
                                </span>
                            </div>
                            <div class="form-group">
                                <treeselect :options="invoice_type_options" v-model="invoice_type"></treeselect>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col">
                                        <label for="signed_at">Ngày ký</label>
                                        <input type="date" :class="{'form-control': true, 'is-invalid': errors.has('signed_at')}" name="signed_at" v-model="signed_at" v-validate="'required|date_format:YYYY-MM-DD'">
                                        <span class="invalid-feedback" v-show="errors.firstByRule('signed_at', 'required')">
                                            Ngày không được để trống.
                                        </span>   
                                        <span class="invalid-feedback" v-show="errors.firstByRule('signed_at', 'date_format')">
                                            Ngày không hợp lệ.
                                        </span>                                    
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
                                <div class="form-control"  :class="{'is-invalid': errors.has('provider_id'), 'form-control': true}">
                                    <label for="">Chọn nhà cung cấp</label>
                                    <treeselect :load-root-options="fetchProviders"  v-model="provider_id" placeholder="Chọn nhà cung cấp" v-validate.initial="'required'" name="provider_id"></treeselect>
                                </div>
                                <div class="invalid-feedback">
                                    Hãy chọn nhà cung cấp
                                </div>
                            </div>
                            
                            <div v-if="provider_id === 0">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col">
                                            <input type="text" :class="{'is-invalid': errors.has('new_provider_name'), 'form-control': true}" v-model="new_provider.name" placeholder="Tên nhà cung cấp" v-validate.initial="'required'" name="new_provider_name">
                                            <div class="invalid-feedback">
                                                Xin hãy nhập tên nhà cung cấp.
                                            </div>
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
                                    <th colspan="4" class="invoice-col"><span v-if="invoice_type === 'invoice'">Đơn hàng</span><span v-else>Hợp đồng</span></th>
                                    <th colspan="2" class="boq-col">BOQ</th>
                                    <th rowspan="2" class="notes-col">Ghi chú</th>
                                </tr>
                                <tr>
                                    <th class="text-center boq-unit-col">Số lượng</th>
                                    <th class="text-center boq-price-col">Đơn giá</th>
                                    <th class="text-center boq-price-col">VAT</th>
                                    <th class="text-center boq-total-col">Thành tiền</th>
                                    <th class="text-center boq-unit-col">Số lượng</th>
                                    <th class="text-center boq-price-col">Đơn giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(category, index) in materials_list">
                                    <tr :key="category.uid" class="category-row">
                                        <td class="controls-col" @click.self="addMaterial(category.id)"><span class="index">{{ $romanize(index + 1) }}</span><span class="delete-this">-</span></td>
                                        <td colspan="11"><input type="text" class="inline-td" v-model="category.name" @focus="$event.target.select()"></td>
                                    </tr>                                 
                                    <tr v-for="(material, mat_index) in category.children" :key="material.uid" class="material-row">
                                        <td class="controls-col"><span class="index">{{ (mat_index + 1) }}</span><span class="delete-this" @click.self="deleteFrom(category.uid, material.uid)">-</span></td>
                                        <td :class="{editable: material.is_new}"><input type="text" class="inline-td" :disabled="!material.is_new" v-model="material.name" @focus="$event.target.select()"></td>
                                        <td :class="{editable: material.is_new}"><input type="text" class="inline-td" :disabled="!material.is_new" v-model="material.per" @focus="$event.target.select()"></td>
                                        <td :class="{editable: material.is_new}"><input type="text" class="inline-td" :disabled="!material.is_new" v-model="material.currency" @focus="$event.target.select()"></td>
                                        <td :class="{editable: material.is_new}"><input type="text" class="inline-td" :disabled="!material.is_new" v-model="material.brand" @focus="$event.target.select()"></td>
                                        <td class="editable"><input type="text" class="inline-td" v-model="material.unit" @focus="$event.target.select()"></td>
                                        <td class="editable"><cleave type="text" class="inline-td" v-model="material.price" @focus="$event.target.select()" :options="options.price"></cleave></td>
                                        <td class="editable"><cleave type="text" class="inline-td" v-model="material.vat" @focus="$event.target.select()" :options="options.vat"></cleave></td>
                                        <td>{{ $comma(material.price * material.unit) }}</td>
                                        <td :class="{editable: material.is_new}"><input type="text" class="inline-td" :disabled="!material.is_new" v-model="material.boq_unit" @focus="$event.target.select()"></td>
                                        <td :class="{editable: material.is_new}"><input type="text" class="inline-td" :disabled="!material.is_new" v-model="material.boq_price" @focus="$event.target.select()"></td>                               
                                        <td class="editable"><input type="text" class="inline-td" :v-model="material.note" @focus="$event.target.select()"></td>
                                    </tr>
                                    <tr :key="category.uid + 1" class="new-material">
                                        <td class="controls-col">∗</td>
                                        <td colspan="11"><input type="text" placeholder="Thêm vật tư" class="inline-td" @focus="$event.target.select()" @keyup.enter="addMaterial(category.uid, $event)"></td>
                                    </tr>
                                </template>
                                <tr class="add-more" @click="addCategory">
                                    <td class="controls-col">+</td>
                                    <td colspan="11">Thêm danh mục</td>
                                </tr>
                                <tr class="sum">
                                    <td colspan="5"></td>
                                    <td colspan="3" class="text-center"><b>Tổng tiền </b></td>
                                    <td colspan="4" class="text-center">{{ $comma(sum)}}</td>
                                </tr>
                                <tr class="sum">
                                    <td colspan="5"></td>
                                    <td colspan="3" class="text-center"><b>Sau VAT </b></td>
                                    <td colspan="4" class="text-center">{{ $comma(sum*1.1)}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div class="form-group text-center" >
                    <submit :on-submit="submitData" :on-success="saved"></submit>
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
            materials_list: [],
            options: {
                price: {
                    numeral: true,
                    numeralThousandsGroupStyle: 'thousand'
                },
                vat: {
                    numeral: true,
                }
            },
            invoice_type_options: [
                {
                    id: "invoice",
                    label: "Hợp đồng kinh tế / Đơn Hàng",
                }, {
                    id: "contract",
                    label: "Hợp đồng nguyên tắc"
                }
            ],
            invoice_type: "invoice",
            invoice_name: "",
            provider_id: null,
            providers: [],
            signed_at: new Date().toISOString().substr(0, 10),
            contract_number: "",
            new_provider: {
                name: "",
                tax_number: "",
                description: "",
                address: "",
            },
            work: false,
            onSubmit: false,
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
        validation() {
            if (this.onSubmit) {
                return {
                    provider_id: (typeof this.provider_id === "number") ? true : false,
                }
            } else {
                return {
                    provider_id: true,
                }
            }
        },
        sum() {
            return this.materials_list.reduce( (sum, category) => {
                if (category.children.length > 0) {
                    sum += category.children.reduce( (child_sum, material) => {
                        return child_sum += material.price * material.unit;
                    }, 0);
                }
                return sum;
            }, 0);
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
                    
                    const children = this.work.flatten.reduce( (materials, material) => {
                        if (material.category_id === t.id) {
                            materials.push(this.materialResource(material));
                        }
                        return materials;
                    }, []);
                    _list.push(this.categoryResource(t.id, {"children": children}));
                    addedCategories.push(t.id)
                }
                if (t.type === "mat") {
                    // Get material
                    const _material = this.work.flatten.find( material => material.id === t.id );
                    // First we check if the category of this material is already added
                    // If not found, add it first
                    let _index = addedCategories.indexOf( _material.category_id );
                    if (_index === -1) {
                        _list.push(this.categoryResource(_material.category_id));

                        _index = addedCategories.push(_material.category_id) - 1;
                    }
                    _list[ _index ].children.push(this.materialResource(_material));
                }
            });
            this.materials_list = _list;

        },

        addCategory() {
            this.materials_list.push(this.categoryResource());
        },
        
        categoryResource(id = 0, merge = {}) {
            let _category = false;
            if (typeof id === "number" && id !== 0) {
                _category = this.work.flatten.find( category => category.id === id );
            } else if (typeof id === "object") {
                _category = id;
            }
            let _return  = {
                "type": "category",
                "name": (_category) ? _category.name : "",
                "uid": this.uid(),
                "is_new": (_category) ? false : true,      
                "id": (_category) ? _category.id : 0,    
                "children": [],
            };
            if (merge) {
                _return  = Object.assign({}, _return, merge);

            }
            return _return;
        },
        materialResource(material = false, override = {}) {
            const _material = {
                "name": (material) ? material.name : "",
                "type": "material",
                "currency": (material) ? material.currency : "vnđ",
                "per": (material) ? material.per : "m",
                "uid": this.uid(),
                "boq_unit": (material) ? material.boq_unit : "-",
                "boq_price": (material) ? this.$comma(material.boq_price) : "-",
                "brand": (material) ? material.brand : "",
                "is_new": (material) ? false : true,
                "unit":  0,
                "price": 0,   
                "id": (material) ? material.id : 0,
                "category_id": (material) ? material.category_id : 0,
                "note": "",
                "vat": 10,
            }
            return Object.assign({}, _material, override);
        },
        addMaterial(category_uid, event = false) {
            const index = this.materials_list.findIndex( category => category.uid === category_uid);
            let merge = {
                "category_id": this.materials_list[index].id,
                "name": (event) ? event.target.value : "",
            }

            
            this.materials_list[index].children.push(this.materialResource(false, merge));
            if (event) event.target.value = "";

        },
        deleteFrom(category_uid, material_uid) {
            const index = this.materials_list.findIndex( category => category.uid === category_uid);
            const mat_index = this.materials_list[index].children.findIndex( material => material.uid === material_uid);
            this.materials_list[index].children.splice(mat_index, 1);
            
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
        saved(response) {
            
            this.$router.push({
                name: "work.show",
                params: {
                    id: this.$route.query.work_id,
                }
            });
        },
        submitData() {
            if (this.errors.any()) {
                return false;
            } else {
                const list = this.materials_list.reduce( (categories, category) => {
                    if (category.name !== "") {
                        categories.push(category);
                    }
                    return categories;
                }, []);
                return {
                    "method": "POST",
                    "url": "invoice",
                    "data": {
                        "work_id": this.$route.query.work_id,
                        "provider_id": this.provider_id,
                        "new_provider": this.new_provider,
                        "name": this.invoice_name,
                        "type": this.invoice_type,
                        "list": list,
                        "signed_at": this.signed_at,
                        "contract_number": this.contract_number,
                    }
                }
            }
        },
        submit() {
            this.onSubmit = true;
            if (typeof this.provider_id === "number") {
               

                axios.post(`${this.$store.state.apiBase}/invoice`, {

                }).then( response => {
                    if (response.status === 200) {

                        this.$swal("Hoàn tất", "Cập nhật thành công", "success").then( result => {
                            axios.get(`${this.$store.state.apiBase}/work/${this.$route.query.work_id}`).then( response => {    
                                if (response.status === 200) {

                                }
                            }).catch( error => {
                                console.log(error)
                            });   

                        });
                    }
                });
            } else {
                this.onSubmit = false;
                return true;
            }

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
        } else {

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
