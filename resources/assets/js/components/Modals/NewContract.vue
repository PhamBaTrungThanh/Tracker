<template>
    <div class="text-left">
        <h3 class="text-center">Hợp đồng nguyên tắc</h3>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <h5 class="text-center">Chọn nhà cung cấp</h5>
                    <treeselect :load-root-options="fetchProviders"  v-model="selected_provider_id"></treeselect>
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
                <h5 class="text-center">Tạo mới nhà cung cấp</h5>
                <div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" v-model="new_provider.name" placeholder="Tên nhà cung cấp" :disabled="selected_provider_id">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" v-model="new_provider.tax_number" placeholder="Mã số thuế" :disabled="selected_provider_id">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" v-model="new_provider.description" placeholder="Mô tả" :disabled="selected_provider_id">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" v-model="new_provider.address" placeholder="Địa chỉ" :disabled="selected_provider_id">
                            </div>
                        </div>            
                    </div>
                </div>
                

            </div>
        </div>

        <hr>
        <h5>Danh sách vật tư</h5>
        <div class="form-group">
            <table class="table">
                <thead class="thead-light text-center">
                    <th class="text-left col-8" >Tên vật tư / Danh mục</th>
                    <th class="col-1">Đơn vị tính</th>
                    <th class="col-1">Số lượng</th>
                    <th class="col-1">Đơn giá</th>
                    <th class="col-1">Thành tiền</th>
                </thead>
                <tbody>
                    <tr v-for="node in list" :key="node.id" :class="node.type">
                        <template v-if="node.type === 'category'">
                            <td colspan="5">
                                <input type="text" class="inline-td" v-focus v-model="node.name"  @keyup.enter="addMaterial">
                            </td>
                        </template>
                        <template v-else>
                            <td><input type="text" class="inline-td" v-focus v-model="node.name" @focus="$event.target.select()" @keyup.enter="addMaterial"><span class="delete" @click.prevent.stop="deleteMaterial(node.id)">Xóa</span></td>
                            <td class="text-center"><input type="text" class="inline-td" v-model="node.per" @focus="$event.target.select()" @keyup.enter="addMaterial"></td>
                            <td class="text-center"><input type="text" class="inline-td" v-model="node.unit" @focus="$event.target.select()" @keyup.enter="addMaterial"></td>
                            <td class="text-center"><input type="text" class="inline-td" v-model="node.price" @focus="$event.target.select()" @keyup.enter="addMaterial"></td>
                            <td class="text-center">{{ node.unit * node.price }}</td>

                        </template>

                    </tr>
                    <tr>
                        <td colspan="6">
                            <div class="nav nav-pills text-center">
                                <a href="#" @click="addCategory">Thêm danh mục</a>
                                <a href="#" @click="addMaterial">Thêm vật tư</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="form-group text-center" >
            <button class="btn btn-primary" @click="submit">Submit</button>
        </div>
    </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
export default {
    data() {
        return {
            providers: [],
            selected_provider_id: false,
            new_provider: {
                name: "",
                tax_number: "",
                description: "",
                address: "",
            },
            list: [],
            signed_at: "",
            contract_number: "",
        }
    },
    watch: {
        selected_provider_id() {
            if (this.selected_provider_id) {
                this.providers.forEach( provider => {
                    if (provider.id === this.selected_provider_id) {
                        this.new_provider = {
                            name: provider.name,
                            tax_number: provider.tax_number,
                            description: provider.description,
                            address: provider.address,
                        }
                        return false;
                    }
                });

            } else {
                this.new_provider = {
                    name: "",
                    tax_number: "",
                    description: "",
                    address: "",
                }
            }
        },
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
                    _nestedList[_nestedList.length - 1].children.push(node);
                }
            });
            return _nestedList;
        },
        work() {
            return this.$store.state.currentWork;
        }
    },
    methods: {
        fetchProviders(callback) {
            let _data = [];
            this.providers.forEach(provider => {
                _data.push({
                    'id': provider.id,
                    'label': provider.name,
                });
            });
            callback(null, _data);
        },
        addCategory() {
            this.list.push({
                type: "category",
                "name": "",
                "id": this.list.length,
            });
        },
        addMaterial() {
            this.list.push({
                type: "material",
                "name": "",
                "id": this.list.length,
                "per": "",
                "unit": "",
                "price": "",
                "total": 0,
            });
        },
        deleteMaterial(node_id) {
            this.list.splice(node_id, 1);
        },
        submit() {
            axios.patch(`${this.$store.state.apiBase}/work/${this.work.id}`, {
                action: "new_contract",
                selected_provider_id: this.selected_provider_id,
                new_provider: this.new_provider,
                list: this.nested_list,
                signed_at: this.signed_at,
                contract_number: this.contract_number,
            }).then( response => {
                if (response.status === 200) {
                    this.providers = [];
                    this.selected_provider_id = false;
                    this.new_provider = {
                        name: "",
                        tax_number: "",
                        description: "",
                        address: "",
                    };
                    this.list = [];
                    this.signed_at = "";
                    this.contract_number = "";
                    this.$swal("Hoàn tất", "Cập nhật thành công", "success").then( result => {
                        this.$emit('success');
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
