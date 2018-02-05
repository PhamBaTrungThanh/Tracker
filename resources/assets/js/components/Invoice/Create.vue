<template>
    <transition v-if="is_ready">
        <div class="create_invoice--container">
            <hero-header :page="pageMeta" />
            <div class="navbar has-shadow">
                <div class="container">
                    <div class="navbar-tabs" v-if="work">
                        <router-link :to="{'name': 'work.show', 'params': {'work_id': work.id}}" class="navbar-item is-tab">
                            <span class="icon">
                                <i class="mdi mdi-chevron-left"></i>
                            </span>
                            <span>Quay lại</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <section class="section">
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <p class="title is-4">Tạo đơn hàng mới</p>
                                <hr />
                                <div class="columns">
                                    <div class="column">
                                        <p class="subtitle is-5">Thông tin chung</p>
                                        <div class="field">
                                            <label class="label">Tên đơn hàng</label>
                                            <div class="control">
                                                <input type="text" :class="{'input': true, 'is-danger': errors.has('invoice_name')}" name="invoice_name" v-model="new_invoice.name" v-validate.initial="'required'">
                                            </div>
                                            <p class="help has-text-danger" v-show="errors.has('invoice_name')">Tên đơn hàng không được để trống.</p>
                                        </div>
                                        <div class="columns">
                                            <div class="column">
                                                <div class="field">
                                                    <label class="label">Loại đơn hàng</label>
                                                    <div class="control">
                                                        <div class="select">
                                                            <select v-model="new_invoice.type">
                                                                <option value="invoice">Hợp đồng kinh tế / Đơn hàng</option>
                                                                <option value="contract">Hợp đồng nguyên tắc</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column">
                                                <div class="field">
                                                    <label class="label">Ngày ký</label>
                                                    <p class="control">
                                                        <cleave :options="options.date" v-model="new_invoice.signed_at" :class="{'input': true, 'is-danger': errors.has('invoice_date')}" name="invoice_date" v-validate.initial="'required|date_format:DD/MM/YYYY'" :raw="false" :disabled="onSubmit"></cleave>
                                                    </p>
                                                    <p class="help is-danger" v-show="errors.firstByRule('invoice_date', 'required')">
                                                        Ngày không được để trống.
                                                    </p>   
                                                    <p class="help is-danger" v-show="errors.firstByRule('invoice_date', 'date_format')">
                                                        Ngày không hợp lệ. Nhập ngày theo dạng DD/MM/YYYY
                                                    </p>   
                                                </div>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Số hợp đồng</label>
                                            <div class="control">
                                                <input type="text" class="input" id="contract_number" v-model="new_invoice.contract_number">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <p class="subtitle is-5">Thông tin nhà cung cấp</p>
                                        <div class="field">
                                            <label :class="{'label': true, 'has-text-danger': errors.has('provider_id')}">Chọn nhà cung cấp</label>
                                            <p class="control">
                                                <treeselect :load-root-options="fetchProviders"  v-model="provider_id" placeholder="Chọn nhà cung cấp" v-validate="'required'" name="provider_id"></treeselect>
                                            </p>
                                        </div>
                                        <div class="columns">
                                            <div class="column">
                                                <div class="field">
                                                    <label class="label">Tên nhà cung cấp</label>
                                                    <div class="control" v-if="provider_id === 0">
                                                        <input type="text" :class="{'input': true, 'is-danger': errors.has('new_provider_name')}" v-model="new_provider.name"  name="new_provider_name" v-validate="'required'">
                                                        <p class="help has-text-danger" v-if="errors.has('new_provider_name')">Không được để trống</p>
                                                    </div>
                                                    <div class="control" v-else>
                                                        <input type="text" class="input" disabled :value="selectedProvider.name">
                                                        
                                                    </div>
                                                </div>
                                                <div class="field">
                                                    <label class="label">Mã số thuế</label>
                                                    <div class="control" v-if="provider_id === 0">
                                                        <input type="text" class="input" v-model="new_provider.tax_number">
                                                    </div>
                                                    <div class="control" v-else>
                                                        <input type="text" class="input" disabled :value="selectedProvider.tax_number">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="column">
                                                <div class="field">
                                                    <label class="label">Địa chỉ</label>
                                                    <div class="control" v-if="provider_id === 0">
                                                        <input type="text" class="input" v-model="new_provider.address">
                                                    </div>
                                                    <div class="control" v-else>
                                                        <input type="text" class="input" disabled :value="selectedProvider.address">
                                                    </div>
                                                </div>
                                                <div class="field">
                                                    <label class="label">Mô tả</label>
                                                    <div class="control" v-if="provider_id === 0">
                                                        <input type="text" class="input" v-model="new_provider.description">
                                                    </div>
                                                    <div class="control" v-else>
                                                        <input type="text" class="input" disabled :value="selectedProvider.description">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <p class="subtitle is-5">Danh sách vật tư</p>
                                <div class="columns">
                                    <div class="column">
                                        <treeselect :multiple="true" :load-root-options="fetchTree" :open-on-focus="true" :close-on-select="false" :disableBranchNodes="false" placeholder="Chọn vật tư theo danh sách" @close="chooseMaterials"></treeselect>
                                    </div>
                                    <div class="column is-narrow">
                                        <button class="button is-primary" @click="newMaterial">Thêm danh mục mới</button>
                                    </div>
                                </div>
                                
                                <div class="columns">
                                    <div class="column">
                                        <table class="table has-text-centered-cell is-bordered is-striped is-narrow is-hoverable is-fullwidth" v-if="flatList">
                                            <thead>
                                                <tr>
                                                    <th rowspan="2" class=""></th>
                                                    <th rowspan="2" class="has-text-left">Tên vật tư / Danh mục</th>
                                                    <th rowspan="2" style="width: 80px">Đơn vị tính</th>
                                                    <th rowspan="2" style="width: 80px">Loại tiền</th>
                                                    <th rowspan="2" style="width: 120px">Hãng</th>
                                                    <th colspan="4" class=""><span v-if="new_invoice.type === 'invoice'">Đơn hàng</span><span v-else>Hợp đồng</span></th>
                                                    <th colspan="2" class="">BOQ</th>
                                                    <th rowspan="2" class="">Ghi chú</th>
                                                </tr>
                                                <tr>
                                                    <th style="width: 100px">Số lượng</th>
                                                    <th style="width: 100px">Đơn giá</th>
                                                    <th style="width: 80px">VAT (%)</th>
                                                    <th style="width: 120px">Thành tiền</th>
                                                    <th style="width: 100px">Số lượng</th>
                                                    <th style="width: 100px">Đơn giá</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(material, index) in flatList" :key="index" :class="`depth-${material.depth}`" @click.right="addMaterial(material.uid, $event)">
                                                    <template v-if="!material.is_new">
                                                        <td>{{index + 1}}</td>
                                                        <td class="has-text-left">{{material.name}}</td>
                                                        <td>{{material.per}}</td>
                                                        <td>{{material.currency}}</td>
                                                        <td>{{material.brand}}</td>
                                                        <td class="control"><input type="text" class="input" v-model="material.tracker.unit" @focus="$event.target.select()"></td>
                                                        <td class="control"><cleave type="text" class="input" v-model="material.tracker.price" @focus="$event.target.select()" :options="options.price"></cleave></td>
                                                        <td class="control"><cleave type="text" class="input has-text-centered" v-model="material.tracker.vat" @focus="$event.target.select()" :options="options.vat"></cleave></td>
                                                        <td>{{ comma((material.tracker.unit * material.tracker.price) * ((material.tracker.vat/100) + 1)) }}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </template>
                                                    <template v-else >
                                                        <td>{{index + 1}}</td>
                                                        <td class="has-text-left control"><input type="text" class="input" v-model="material.name" @focus="$event.target.select()"></td>
                                                        <td class="control"><input type="text" class="input has-text-centered" @focus="$event.target.select()" v-model="material.per"></td>
                                                        <td class="control"><input type="text" class="input has-text-centered" @focus="$event.target.select()" v-model="material.currency"></td>
                                                        <td class="control"><input type="text" class="input" @focus="$event.target.select()" v-model="material.brand"></td>
                                                        <td class="control"><input type="text" class="input" v-model="material.tracker.unit" @focus="$event.target.select()"></td>
                                                        <td class="control"><cleave type="text" class="input" v-model="material.tracker.price" @focus="$event.target.select()" :options="options.price"></cleave></td>
                                                        <td class="control"><cleave type="text" class="input has-text-centered" v-model="material.tracker.vat" @focus="$event.target.select()" :options="options.vat"></cleave></td>
                                                        <td>{{ comma((material.tracker.unit * material.tracker.price) * ((material.tracker.vat/100) + 1)) }}</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </template>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p>
                                            <button class="button is-primary" @click="newMaterial">Thêm danh mục mới</button>
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--
            <div class="card">

                <hr>
                <div class="card-body">

                    <div class="form-group">
                        <table class="table boq-table">
                            <thead class="thead-light text-center">
                                <tr>
                                    <th rowspan="2" class="controls-col text-center"></th>
                                    <th rowspan="2" class="text-left name-col" >Tên vật tư / Danh mục</th>
                                    <th rowspan="2" class="per-col">Đơn vị tính</th>
                                    <th rowspan="2" class="currency-col">Loại tiền</th>
                                    <th rowspan="2" class="brand-col">Hãng</th>
                                    <th colspan="4" class="invoice-col"><span v-if="new_invoice.type === 'invoice'">Đơn hàng</span><span v-else>Hợp đồng</span></th>
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
                                        <td class="controls-col" @click.self="addMaterial(category.id)"><span class="index">{{ (index + 1) }}</span><span class="delete-this">-</span></td>
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
                                        <td>{{ comma(material.price * material.unit) }}</td>
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
                                    <td colspan="4" class="text-center">{{ comma(sum)}}</td>
                                </tr>
                                <tr class="sum">
                                    <td colspan="5"></td>
                                    <td colspan="3" class="text-center"><b>Sau VAT </b></td>
                                    <td colspan="4" class="text-center">{{ comma(sum*1.1)}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                 <div class="card-body">
                     <p class="card-text text-center">
                        <submit :on-submit="submitData" :on-success="saved"></submit>
                        <button class="btn" @click="cancel">Bỏ qua</button>
                     </p>

                </div>               
            </div>
            -->
            <aside :class="{'menu': true, 'right-click': true, 'active': rightClick.isActive}" :style="{'top': rightClick.x, 'left': rightClick.y}">
                <p class="menu-label">
                    Tùy chọn
                </p>
                <ul class="menu-list">
                    <li>
                        <a>Thêm danh mục</a>
                        <a>Xóa danh mục</a>
                    </li>
                </ul>
            </aside>
        </div>           
    </transition>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            'is_ready': true,
            'materials_list': [],
            'flatList': [],
            'rightClick': {
                'isActive': false,
                'x': 0,
                'y': 0,
            },
            'options': {
                'price': {
                    'numeral': true,
                    'numeralThousandsGroupStyle': 'thousand'
                },
                'vat': {
                    'numeral': true,
                },
                'date': {
                    'date': true,
                    'datePattern' : ["d", "m", "Y"],                    
                }
            },
            'new_invoice': {
                'name': "",
                'type': "invoice",
                'signed_at': "",
                'contract_number': "",
            },
            'provider_id': null,
            'new_provider': {
                'name': "",
                'tax_number': "",
                'description': "",
                'address': "",
            },
            'onSubmit': false,
        }
    },

    computed: {
        /*
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
        */
        selectedProvider() {
            return (this.providers && this.provider_id) ? this.providers.find( p => p.id === this.provider_id) : {};
        },
        pageMeta() {
            return {
                'title': "Tạo đơn hàng mới",
                'description': (this.work) ? `Công trình ${this.work.name}` : "Công trình",
                'color': "success",
            }
        },
        tree() {
            return this.$store.getters["material/tree"];
            
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
            /*
            return this.materials_list.reduce( (sum, category) => {
                if (category.children.length > 0) {
                    sum += category.children.reduce( (child_sum, material) => {
                        return child_sum += material.price * material.unit;
                    }, 0);
                }
                return sum;
            }, 0);*/
        },
        ...mapGetters("provider", [
            "providers"
        ]),

        work() {
            return this.$store.getters["work/work"](parseInt(this.$route.params.work_id));
        }
    },

    methods: {
        guard() {
            this.$store.dispatch("invoice/getRelatedWork", {'work_id': parseInt(this.$route.params.work_id)});
            this.$store.dispatch("material/getTree");
        },
        generateFlatList() {
            let list = this.materials_list;
            let _flatList = this.$store.getters["material/materials"].map( value => Object.assign({}, value, {
                'active': false,
                'children': null,
                'is_new': false,
                'tracker': {
                    'vat': 10,
                    'price': 0,
                    'unit': 0,
                    
                }
            }));

            let _trackBackward = (id) => {
                let index = _flatList.findIndex( i => i.id === id);
                _flatList[index].active = true;
                if (_flatList[index].parent_id) {
                    _trackBackward(_flatList[index].parent_id);
                }
            }
            let _trackForward = (id, index) => {
                for (let i = index + 1; i < _flatList.length; i++) {
                    if (_flatList[i].parent_id === id) {
                         _flatList[i].active = true;
                         if (_flatList[i].has_children) {
                             _trackForward(_flatList[i].id, i);
                         }
                    }
                   
                }

            }
            for (let i = list.length - 1;  i >= 0; i--) {
                let index = _flatList.findIndex( m => m.id === list[i]);
                if (index !== -1) {
                    _flatList[index].active = true;
                    if(_flatList[index].parent_id) {
                        _trackBackward(_flatList[index].parent_id);
                    }
                    if(_flatList[index].has_children) {
                        _trackForward(_flatList[index].id, index);
                    }
                }
            }
            

            return _flatList.reduce( (materials, material) => {
                if (material.active === true) {
                    if (material.children) {
                        material.children = null;
                    }
                    materials.push(material);
                }
                return materials;
            }, []);
        },
        chooseMaterials(values) {
            this.materials_list = values;
            this.flatList = this.generateFlatList();

            /*

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
            */
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
        materialResource(parent_uid = false) {
            return {
                "name": "",
                "type": "material",
                "currency": "vnđ",
                "per": "m",
                "uid": this.uid(),
                "brand": "",
                "is_new": true,
                'tracker': {
                    'vat': 10,
                    'price': 0,
                    'unit': 0
                },
                "id": 0,
                'parent_uid': (parent_uid) ? parent_uid : "",
            }
            
        },
        addMaterial(category_uid, event = false) {
            this.rightClick = {
                'isActive': true,
                'x': event.pageX,
                'y': event.pageY,
            };
 
            /*
            const index = this.materials_list.findIndex( category => category.uid === category_uid);
            let merge = {
                "category_id": this.materials_list[index].id,
                "name": (event) ? event.target.value : "",
            }

            
            this.materials_list[index].children.push(this.materialResource(false, merge));
            if (event) event.target.value = "";*/

        },
        newMaterial() {
            return this.flatList.push(this.materialResource());
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
            callback(null, [{id: 0, label: `TẠO NHÀ CUNG CẤP MỚI`}].concat(this.providers.map( provider => { return {id: provider.id, label: provider.name} })));
        },
        fetchTree(callback) {
            callback(null, this.tree);
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
