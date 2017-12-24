<template>
    <div class="dialog-wrapper" @click.self="cancel">

        <div class="dialog-content big">
            <h3>Tạo đơn hàng mới</h3>
            <hr>
            <div class="row">
                <div class="col">
                    <h5 class="text-center">Thông tin chung</h5>
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
            <hr>
            <h5>Danh sách vật tư</h5>
            <div class="form-group">
                 <treeselect :mutiple="true" :options="work.nested_categories" placeholder="Chọn vật tư theo danh sách"></treeselect>
            </div>
            <div class="form-group">
                <table class="table boq-table">
                    <thead class="thead-light text-center">
                        <tr>
                            <th rowspan="2" class="controls-col text-center"></th>
                            <th rowspan="2" class="text-left name-col" >Tên vật tư / Danh mục</th>
                            <th rowspan="2" class="per-col">Đơn vị tính</th>
                            <th rowspan="2" class="currency-col">Loại tiền</th>
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
                        <tr v-for="row in list" :key="row.uid" :class="{'category-row': row.type === 'category', 'material-row': row.type === 'material'}">
                            <template v-if="row.type === 'category'">
                                <td class="controls-col">+</td>
                                <td colspan="9"><input type="text" class="inline-td" v-model="row.name" @focus="$event.target.select()" v-focus @keyup.enter="addMaterial(row.keyid)"></td>
                            </template>
                            <template v-else>
                                <td class="controls-col">-</td>
                                <td><input type="text" class="inline-td" v-model="row.name" @focus="$event.target.select()" v-focus @keyup.enter="addMaterial(row.keyid)"></td>
                                <td><input type="text" class="inline-td" v-model="row.per" @focus="$event.target.select()" @keyup.enter="addMaterial(row.keyid)"></td>
                                <td><input type="text" class="inline-td" v-model="row.currency" @focus="$event.target.select()" @keyup.enter="addMaterial(row.keyid)"></td>
                                <td><input type="text" class="inline-td" v-model="row.unit" @focus="$event.target.select()" @keyup.enter="addMaterial(row.keyid)"></td>
                                <td><input type="text" class="inline-td" v-model="row.price" @focus="$event.target.select()" @keyup.enter="addMaterial(row.keyid)"></td>
                                <td>{{ row.price * row.unit }}</td>
                                <td><input type="text" class="inline-td" :disabled="!row.is_new" v-model="row.boq_unit" @focus="$event.target.select()" @keyup.enter="addMaterial(row.keyid)"></td>
                                <td><input type="text" class="inline-td" :disabled="!row.is_new" v-model="row.boq_price" @focus="$event.target.select()" @keyup.enter="addMaterial(row.keyid)"></td>                               
                                <td></td>
                            </template>
                        </tr>
                        <tr class="add-more" @click="addCategory">
                            <td class="controls-col">+</td>
                            <td colspan="9">Thêm</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div class="form-group text-center" >
                <button class="btn btn-primary" @click="submit">Lưu</button>
                <button class="btn" @click="cancel">Bỏ qua</button>
            </div>
        </div>           
    </div>

</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
export default {
    props: ['work_id'],
    data() {
        return {
            list: [],
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
            provider_id: null,
            providers: [],
            signed_at: "",
            contract_number: "",
            new_provider: {
                name: "",
                tax_number: "",
                description: "",
                address: "",
            }
        }
    },

    computed: {
        nested_list() {
            let _nestedList = [];
            this.list.forEach( node => {
                if (node.type === "category") {
                    _nestedList.push({
                        name: node.name,
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
        work() {
            return this.$store.state.currentWork;
        },

    },
    methods: {
        addCategory() {
            this.list.push({
                "type": "category",
                "name": "",
                "uid": this.uid(),
                "keyid": this.list.length,
                "is_new": true,
            });
        },
        addMaterial(keyid) {
            let _index = keyid + 1;
            if (this.list.length > 1) {
                for (let i = keyid + 1; i < this.list.length; i++) {
                    if (this.list[i].type === "category" || i === this.list.length) {
                        _index = i;
                        break;
                    }
                }
            }
            this.list.splice(_index, 0, {
                "name": "",
                "type": "material",
                "currency": "vnđ",
                "uid": this.uid(),
                "keyid": "",
                "boq_unit": 0,
                "boq_price": 0,
                "is_new": true,
                "unit":  0,
                "price": 0,

            });
            this.updateIndex();
        },
        updateIndex() {
            for (let i = 0; i < this.list.length; i++) {
                this.list[i].keyid = i;
            }
        },
        uid() {
            return Math.random().toString(36).substring(2) 
               + (new Date()).getTime().toString(36).substring(10);
        },
        fetchProviders(callback) {
            callback(null, [{id: 0, label: "Tạo nhà cung cấp mới"}].concat(this.providers.map( provider => { return {id: provider.id, label: provider.name} })));
        },
        cancel() {
            this.$close(false);
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
    mounted() {
        axios.get(`${this.$store.state.apiBase}/provider`).then (response => {
            this.providers = response.data;
        });
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
